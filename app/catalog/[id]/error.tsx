"use client";

type Props = {
  error: Error;
};

export default function Error({ error }: Props) {
  return <p>Could not fetch camper details. {error.message}</p>;
}