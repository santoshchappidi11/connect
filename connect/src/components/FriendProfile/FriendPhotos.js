import React from "react";
import "./FriendPhotos.css";

const FriendPhotos = ({ allPosts }) => {
  let hasPhoto = false;

  return (
    <>
      <div id="friend-photos">
        <div id="friend-photos-header">
          <h2>Photos</h2>
        </div>
        <div id="friend-photos-body">
          <div id="all-photos">
            {allPosts?.length ? (
              allPosts?.map((post) => {
                // Check if the post is of type is photo
                if (post?.image?.slice(-3) !== "mp4") {
                  // Set the flag to true if a photo post is found
                  hasPhoto = true;
                  return (
                    <div className="single-photo" key={post?._id}>
                      <img src={post?.image} alt="profile" />
                    </div>
                  );
                }
                return null; // Return null for non-video posts
              })
            ) : (
              <div id="no-msg">
                <p>No photos to show!</p>
              </div>
            )}
            {allPosts?.length > 0 && !hasPhoto && (
              <div id="no-msg">
                <p>No photos to show!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendPhotos;
