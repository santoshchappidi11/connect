import React from "react";
import "./ProfileVideos.css";

const ProfileVideos = ({ allPosts }) => {
  let hasVideo = false;

  return (
    <>
      <div id="profile-videos">
        <div id="profile-videos-header">
          <h2>Videos</h2>
        </div>
        <div id="profile-videos-body">
          <div id="all-videos">
            {allPosts?.length ? (
              allPosts?.map((post) => {
                // Check if the post is of type mp4
                if (post?.image?.slice(-3) === "mp4") {
                  // Set the flag to true if a video post is found
                  hasVideo = true;
                  return (
                    <div className="video" key={post.id}>
                      <video controls autoPlay>
                        <source src={post?.image} type="video/mp4" />
                      </video>
                    </div>
                  );
                }
                return null; // Return null for non-video posts
              })
            ) : (
              <div id="no-msg">
                <p>No videos to show!</p>
              </div>
            )}
            {allPosts?.length > 0 && !hasVideo && (
              <div id="no-msg">
                <p>No videos to show!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileVideos;
