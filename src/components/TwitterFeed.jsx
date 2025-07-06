// src/components/TwitterFeed.jsx
import React from 'react';
import { useEffect, useState } from 'react';
import { FiTwitter } from 'react-icons/fi';

const TwitterFeed = ({ username = 'StellarEastAfrica', limit = 3 }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data - in a real app, you would use the Twitter API
  useEffect(() => {
    setLoading(true);
    try {
      // Simulate API call
      setTimeout(() => {
        const mockTweets = [
          {
            id: '1',
            text: 'Exciting news! Our next Stellar developer meetup in Nairobi is scheduled for June 15th. #Stellar #Blockchain',
            created_at: new Date().toISOString(),
            likes: 42,
            retweets: 12
          },
          {
            id: '2',
            text: 'We just launched our new Stellar Academy program to train developers across East Africa. Applications now open!',
            created_at: new Date(Date.now() - 86400000).toISOString(),
            likes: 89,
            retweets: 34
          },
          {
            id: '3',
            text: 'Sarah Wahinya speaking at the Africa Tech Summit about blockchain for financial inclusion on the Stellar network.',
            created_at: new Date(Date.now() - 172800000).toISOString(),
            likes: 156,
            retweets: 45
          }
        ].slice(0, limit);
        setTweets(mockTweets);
        setLoading(false);
      }, 800);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [username, limit]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading tweets: {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tweets.map((tweet) => (
          <div 
            key={tweet.id}
            className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 text-white p-2 rounded-full mr-3">
                <FiTwitter size={20} />
              </div>
              <div>
                <h4 className="font-bold">@{username}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {new Date(tweet.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-gray-800 dark:text-gray-200 mb-4">{tweet.text}</p>
            <div className="flex text-gray-500 dark:text-gray-400 text-sm">
              <span className="mr-4">❤️ {tweet.likes}</span>
              <span>🔁 {tweet.retweets}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href={`https://twitter.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          <FiTwitter className="mr-2" />
          Follow us on Twitter
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;