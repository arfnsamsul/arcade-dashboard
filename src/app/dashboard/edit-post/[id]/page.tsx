"use client";

import React from "react";
import { useParams } from "next/navigation";
import NewPostPage from "../../new-post/page"; // Import the NewPostPage component

const EditPostPage: React.FC = () => {
  const params = useParams();
  const postId = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure postId is a single string

  return (
    <NewPostPage
      isEditMode={true} // Pass this prop to indicate edit mode
      postId={postId} // Pass the postId prop
    />
  );
};

export default EditPostPage;
