import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <form className='flex justify-between bg-slate-400'>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
