from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

GOOGLE_PAGESPEED_API_KEY = 'AIzaSyCBadLQtBLdVPD37LfmnqoetTv57L2isOc'

@app.route('/api/pagespeed', methods=['GET'])
def get_pagespeed():
    url = request.args.get('url')
    try:
        response = requests.get(f'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={url}&key={GOOGLE_PAGESPEED_API_KEY}')
        data = response.json()
        return jsonify({'score': data['lighthouseResult']['categories']['performance']['score'] * 100})
    except Exception as e:
        print(e)
        return jsonify({'error': 'Error fetching PageSpeed data'}), 500

if __name__ == '__main__':
    app.run(debug=True)
