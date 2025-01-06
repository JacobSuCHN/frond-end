import React from "react";

interface AvatarProps {}

export const Avatar: React.FC<AvatarProps> = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="Avatar" />
    </div>
  );
};
