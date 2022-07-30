import React from "react";
import ContentLoader from "react-content-loader";

export default function DataCardSkeleton(props) {
  return (
    <ContentLoader
      speed={1}
      width={700}
      height={250}
      viewBox="-20 0 260 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="2" height="300" />
      <rect x="214" y="0" rx="0" ry="0" width="2" height="300" />
      <rect x="0" y="0" rx="0" ry="0" width="216" height="2" />
      <rect x="0" y="300" rx="0" ry="0" width="216" height="2" />
      <rect x="30" y="80" width="150" height="60" />
      <rect x="20" y="20" rx="0" ry="0" width="180" height="30" />
      <rect x="35" y="180" rx="0" ry="0" width="160" height="30" />
      <rect x="40" y="230" rx="0" ry="0" width="120" height="20" />
      <rect x="40" y="270" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
  );
}
