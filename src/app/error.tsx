"use client";
interface ErrorProp {
  error: Error;
  reset: () => void;
}
const error = ({ error }: ErrorProp) => {
  return <div>{error.message}</div>;
};

export default error;
