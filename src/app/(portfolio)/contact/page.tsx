"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone Number (Optional)" />
        <textarea></textarea>
        <button onClick={(e) => console.log("hi")}>Submit</button>
      </form>
    </div>
  );
}
