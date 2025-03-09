'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GitHubProfile {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}
const Profile = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProfile = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://api.github.com/users/mpsalunggg');
      setProfile(res.data);
    } catch (err: unknown) {
      console.error('Error fetching GitHub profile:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <section id="profile" className="py-8 flex flex-col items-center">
      {profile && !loading ? (
        <div className="flex">
          <div className="relative w-48 h-48 mb-4 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={profile.avatar_url}
              alt={`${profile.name || profile.login}'s GitHub profile`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">
              {profile.name || profile.login}
            </h2>
            {profile.bio && <p className="text-gray-600 mt-2">{profile.bio}</p>}

            <div className="flex gap-4 mt-4">
              <div className="text-center">
                <p className="font-bold">{profile.public_repos}</p>
                <p className="text-sm text-gray-600">Repositories</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{profile.followers}</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{profile.following}</p>
                <p className="text-sm text-gray-600">Following</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </section>
  );
};

export default Profile;
