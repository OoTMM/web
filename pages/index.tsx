import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <p className="disclaimer">
        The dev version of the randomizer is updated in real time.<br/>
        Things may be broken, seeds may be unbeatable.<br/>
        You may encounter frustrating game breaking bugs.<br/>
        <br/>
        Please report any bug you find in our <a target="_blank" href="https://discord.gg/4QdtPBP6wf">Discord</a>.
      </p>
      <div className="gen-box">
        <Link className="gen gen-stable" href="/gen/stable">Generate a Seed</Link>
        <Link className="gen gen-dev" href="/gen/dev">Generate a Seed (Dev)</Link>
      </div>
    </>
  )
}
