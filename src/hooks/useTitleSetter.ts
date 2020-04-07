import { useEffect } from "react";

// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]); // Only re-run the effect if count changes

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  });
}

export default useDocumentTitle;
