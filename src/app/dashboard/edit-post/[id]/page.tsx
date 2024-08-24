// src/app/dashboard/edit-post/[id]/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NewPostPage from "../../new-post/page"; // Import the NewPostPage component

const EditPostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the post ID from the URL

  // Placeholder state for loading or fetching the post data
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    imageSrc: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch the post data from Firestore based on the ID
      // Here is an example of simulating fetched data
      const fetchedData = {
        title: "Sample Title for Editing",
        content: "This is the content for the post you are editing...",
        imageSrc:
          "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8fDB8fHx8MTYyODcyMzU3Nw&ixlib=rb-1.2.1&q=80&w=400",
      };
      setPostData(fetchedData);
    }
  }, [id]);

  return (
    <NewPostPage
      isEditMode={true} // Pass this prop to indicate edit mode
      postData={postData} // Pass the fetched data as props
    />
  );
};

export default EditPostPage;
