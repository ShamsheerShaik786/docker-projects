from flask import Flask, jsonify
import redis
import os

app = Flask(__name__)

# Set up Redis connection
redis_host = os.getenv('REDIS_HOST', 'redis')
redis_client = redis.StrictRedis(host=redis_host, port=6379, decode_responses=True)

@app.route('/')
def home():
    redis_client.incr('hits')
    return jsonify(message="Welcome to the Microservice App", hits=redis_client.get('hits'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
