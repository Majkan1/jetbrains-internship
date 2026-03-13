
export default function Index() {

  const firstIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="3" y="18" width="26" height="26" rx="3" fill="#E6E6E7" />
      <rect x="19" y="4" width="26" height="26" rx="3" fill="#E6E6E7" />
      <rect x="14" y="14" width="20" height="20" rx="2.5" fill="#FFFFFF" stroke="#E6E6E7" strokeWidth="2" />
    </svg>
  );

  const secondIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M0 46C0 46.6569 1.34315 48 3 48H45C46.6569 48 48 46.6569 48 45V33.7998C48 33.2475 47.5523 32.7998 47 32.7998H1C0.447715 32.7998 0 33.2475 0 33.7998V45ZM48 3C48 1.34315 46.6569 0 45 0H3C1.34315 0 0 1.34315 0 3V14.2002C0 14.7525 0.447715 15.2002 1 15.2002H47C47.5523 15.2002 48 14.7525 48 14.2002V3ZM0 17.7998V30.2002C0 30.7525 0.447715 31.2002 1 31.2002H47C47.5523 31.2002 48 30.7525 48 30.2002V17.7998C48 17.2475 47.5523 16.7998 47 16.7998H1C0.447715 16.7998 0 17.2475 0 17.7998Z"
        fill="white"
      />
    </svg>
  );

  const thirdIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" fill="#EDEDED" />
      <ellipse cx="24" cy="24" rx="8" ry="19" stroke="#2A2A2A" strokeWidth="2" />
      <path d="M5 24H43" stroke="#2A2A2A" strokeWidth="2" />
      <path d="M8.5 15.5H39.5" stroke="#2A2A2A" strokeWidth="2" />
      <path d="M8.5 32.5H39.5" stroke="#2A2A2A" strokeWidth="2" />
      <path d="M24 5V43" stroke="#2A2A2A" strokeWidth="2" />
    </svg>
  );

  const fourthIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M10 34C10 21.85 16.27 12 24 12C31.73 12 38 21.85 38 34H10Z" fill="#EDEDED" />
      <circle cx="18.5" cy="24" r="1.8" fill="#2A2A2A" />
      <circle cx="29.5" cy="24" r="1.8" fill="#2A2A2A" />
      <path d="M17 10L14 5" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 10L34 5" stroke="#EDEDED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#19191C] text-white font-sans selection:bg-purple-500 text-base pb-0">
      <div className="flex items-center justify-between px-8 h-16 border-b border-white">
        <svg className="w-[100px] h-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24"><radialGradient id="kotlin-logo-large_svg__a" cx="22.432"
           cy="3.493" r="21.679" gradientTransform="translate(-.19 .042) scale(.9998)" gradientUnits="userSpaceOnUse"><stop offset="0.003" stop-color="#e44857">
            </stop><stop offset="0.469" stop-color="#c711e1"></stop><stop offset="1" stop-color="#7f52ff"></stop></radialGradient>
            <path fill="url(#kotlin-logo-large_svg__a)" d="M22.87 21.68H3.94V2.76h18.93l-9.66 9.32z"></path>
            <g fill="#fff"><path d="M45.69 2.73h-3.76l-8.18 8.73v-8.7h-3.02v18.92h3.02v-9.17l8.21 9.17h3.89l-8.75-9.79z"></path>
            <path d="M55.93 8.44c-1.07-.62-2.28-.93-3.64-.93-1.38 0-2.61.31-3.7.93a6.63 6.63 0 00-2.55 2.57c-.61 1.1-.91 2.35-.91 3.74 0 1.4.3 2.64.91 3.74a6.45
             6.45 0 002.53 2.57c1.09.62 2.32.93 3.7.93 1.36 0 2.58-.31 3.66-.93a6.53 6.53 0 002.51-2.57c.6-1.1.9-2.35.9-3.74 0-1.4-.3-2.64-.9-3.74-.6-1.1-1.43-1.95-2.51-2.57zm-.19
              8.7c-.33.69-.8 1.23-1.4 1.61-.6.39-1.3.58-2.08.58-.79 0-1.49-.19-2.11-.58-.61-.39-1.09-.93-1.43-1.61-.34-.69-.51-1.48-.51-2.38 0-.9.17-1.7.51-2.39.34-.69.82-1.23
               1.43-1.61.61-.39 1.32-.58 2.12-.58.77 0 1.46.19 2.07.58.6.39 1.07.93 1.4 1.61.33.69.49 1.48.49 2.39.01.9-.15 1.69-.49 2.38zm9.75-12.76h-2.92v2.35c0 .37-.09.65-.27.83-.18.18-.46.28-.84.28h-1.43v2.49h2.49v7.45c0 .77.16 1.46.47
                2.05.31.59.76 1.05 1.34 1.37.58.32 1.27.49 2.06.49h2.23V19.1h-1.68c-.43 0-.78-.15-1.06-.45-.27-.3-.4-.7-.4-1.2v-7.11h3.22v-2.5h-3.22V4.38zM71.03 2H74v19.68h-2.97zm6.32.03h3v3.05h-3zm0 5.81h2.97v13.84h-2.97zm18.08 2.28a4.694
                4.694 0 00-1.77-1.92c-.76-.46-1.65-.69-2.67-.69-1.08 0-2.03.26-2.84.79-.65.42-1.17.98-1.58 1.68l-.02-2.14H83.7v13.84h2.97v-7.74c0-.75.14-1.41.43-1.99.28-.58.68-1.03 1.2-1.35.52-.32 1.12-.48 1.82-.48.62 0 1.16.13 1.6.39.45.26.78.64
                 1.01 1.12.23.49.34 1.07.34 1.74v8.31h2.97v-8.73c.02-1.07-.2-2.01-.61-2.83z"></path></g></svg>
        <div className=" grid grid-flow-col items-center auto-cols-max gap-8  h-16">
          <div className="inline-block group relative cursor-pointer py-5">
            <p>Solutions</p>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
          </div>
          <div className="inline-block group relative cursor-pointer py-5">
            <p>Docks</p>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
          </div>
          <div className="inline-block group relative cursor-pointer py-5">
            <p>Community</p>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
          </div>
          <div className="inline-block group relative cursor-pointer py-5">
            <p>Teach</p>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
          </div>
          <div className="inline-block  group relative cursor-pointer py-5">
            <p>Play</p>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-0 py-24">
        <h1
          className="max-w-[980px] text-[clamp(2.6rem,4.7vw,3.9rem)] font-bold leading-[62px] tracking-[-0.03em] mb-5"
          style={{ fontFamily: '"JetBrains Sans", Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
        >
          A modern programming language
          <br />
           that makes developers happier
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex gap-4">
            <a
              style = {{backgroundColor:'rgb(76, 166, 255)',borderRadius:'36px',fontSize:'19px'}}
              href="#"
              className=" hover:bg-purple-700 text-white px-8 pt-3.5 pb-3 rounded-xl  transition-colors duration-200"
            >
              Get started
            </a>
            <a
              style = {{borderRadius:'36px'}}
              href="#"
              className="border border-white/20 hover:bg-white/10 px-7.75 py-2.75 rounded-xl font-semibold transition-colors duration-200"
            >
              Why Kotlin
            </a>
          </div>
          <div>
            <img src="/assets/jetbrains-logo.svg" alt="JetBrains logo" />
          </div>
          <div className="text-gray-400 text-sm py--1">
            Developed by <a href="#" className="text-white hover:underline">JetBrains</a> &amp; Open-source <a href="#" className="text-white hover:underline">Contributors</a>
          </div>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-6 group-hover:bg-purple-600/20 flex items-center justify-center transition-colors">
              <div className="w-14 h-14">{firstIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Multiplatform Mobile</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Share the logic of your Android and iOS apps while keeping UX native</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-6 group-hover:bg-purple-600/20 flex items-center justify-center transition-colors">
              <div className="w-12 h-12">{secondIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Server-side</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Modern development experience with familiar JVM technology</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-6 group-hover:bg-purple-600/20 flex items-center justify-center transition-colors">
              <div className="w-12 h-12">{thirdIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Frontend</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Extend your projects to web</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-6 group-hover:bg-purple-600/20 flex items-center justify-center transition-colors">
              <div className="w-30 h-12">{fourthIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Android</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Recommended by Google for building Android apps</p>
          </div>
        </div>
        <section className="mt-4 text-sm text-gray-300">
          <a href="/docs/multiplatform.html" className="underline decoration-1 underline-offset-2 hover:text-white transition-colors">Multiplatform for Other Platforms,</a>{" "}
          <a href="/docs/data-science-overview.html" className="underline decoration-1 underline-offset-2 hover:text-white transition-colors">Data Science</a>
        </section>
      </main>

      {/* Latest from Kotlin */}
      <section className="border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Latest from Kotlin</h2>
          <div>
            <a href = "https://blog.jetbrains.com/kotlin/2022/04/kotlin-1-6-20-released/">
              <picture>
                <img src="/assets/kotlin-1.6.20.png" alt="Kotlin Image"/>
              </picture>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            <div>
              <p className="text-gray-500 text-sm mb-2">blog.jetbrains.com</p>
              <a href="https://blog.jetbrains.com/kotlin/2021/11/kotlin-1-6-0-is-released/"
               className="text-lg font-medium underline decoration-2 underline-offset-2 transition-colors leading-snug block">Kotlin 1.6.0 is released</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">blog.jetbrains.com</p>
              <a href="https://blog.jetbrains.com/kotlin/2022/01/the-new-aws-sdk-for-kotlin-with-coroutines-support/" 
              className="text-lg font-medium underline decoration-2 underline-offset-2 transition-colors leading-snug block">The new AWS SDK for Kotlin with Coroutines support</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">blog.jetbrains.com</p>
              <a href="https://blog.jetbrains.com/kotlin/2021/12/introducing-kotlinx-coroutines-1-6-0/"
               className="text-lg font-medium  underline decoration-2 underline-offset-2 transition-colors leading-snug block">Introducing kotlinx.coroutines 1.6.0</a>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2">blog.jetbrains.com</p>
              <a href="https://blog.jetbrains.com/kotlin/2021/12/kotlin-features-survey-2021-results/"
               className="text-lg font-medium underline decoration-2 underline-offset-2 transition-colors leading-snug block">Results of the Kotlin Features Survey 2021</a>
            </div>
          </div>
          
          <div className="mt-12">
             <a href="https://blog.jetbrains.com/kotlin/" className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
               Kotlin blog
             </a>
          </div>
        </div>
      </section>

      {/* Why Kotlin (Light Section) */}
      <section className="bg-white text-gray-900 py-32 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-24">Why Kotlin</h2>
          
          <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Modern, concise and safe programming language</h3>
              <p className="text-gray-600 text-lg mb-8">Easy to pick up, so you can create powerful applications immediately.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Get started</a>
            </div>
            <div className="md:col-span-7 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
               <div className="flex gap-6 border-b border-gray-200 mb-6 overflow-x-auto pb-4">
                 <span className="whitespace-nowrap font-medium cursor-pointer text-gray-500 hover:text-gray-900">Concise</span>
                 <span className="whitespace-nowrap font-medium cursor-pointer text-gray-500 hover:text-gray-900">Safe</span>
                 <span className="whitespace-nowrap font-medium cursor-pointer text-gray-500 hover:text-gray-900">Expressive</span>
                 <span className="whitespace-nowrap font-medium cursor-pointer text-gray-500 hover:text-gray-900">Interoperable</span>
                 <span className="whitespace-nowrap font-medium cursor-pointer text-purple-600 border-b-2 border-purple-600 pb-4 -mb-[17px]">Multiplatform</span>
               </div>
            </div>
          </div>

          {/* Productivity Block */}
          <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">A productive way to write server‑side applications</h3>
              <p className="text-gray-600 text-lg mb-8">Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Learn more</a>
            </div>
            <div className="md:col-span-7 bg-gray-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
               <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/8xAH7RU0Y44" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          {/* Multiplatform Block */}
          <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Cross-platform layer for native applications</h3>
              <p className="text-gray-600 text-lg mb-8">Share application logic between web, mobile, and desktop platforms while keeping an experience native to users.<br/><br/>Save time and get the benefit of unlimited access to features specific to these platforms.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Learn about Kotlin Multiplatform</a>
            </div>
            <div className="md:col-span-7 flex items-center justify-center">
               <div className="w-full aspect-video bg-gradient-to-tr from-purple-100 to-blue-50 rounded-2xl flex items-center justify-center border border-gray-200">
                   <div className="text-center">
                     <div className="w-20 h-20 bg-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center opacity-80 shadow-lg">
                        <div className="w-10 h-10 bg-white rounded-lg opacity-50"></div>
                     </div>
                     <span className="text-xl font-bold text-purple-900/60">Kotlin Multiplatform</span>
                   </div>
               </div>
            </div>
          </div>

          {/* Community Block */}
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Big, friendly and helpful<br/>community</h3>
              <p className="text-gray-600 text-lg mb-8">Kotlin has great support and many contributors in its fast-growing global community. Enjoy the benefits of a rich ecosystem with a wide range of community libraries. Help is never far away — consult extensive community resources or ask the Kotlin team directly.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Join the community</a>
            </div>
            <div className="md:col-span-7 bg-gray-100 rounded-2xl aspect-video flex items-center justify-center overflow-hidden shadow-sm border border-gray-100">
               <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/JGvk4M0Rfxo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Highlights Section */}
      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-16 gap-6">
             <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Kotlin Usage Highlights</h2>
             <button className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">Sort: Default</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-blue-600">Gradle</div>
              <p className="text-gray-600 text-lg leading-relaxed">Gradle is introducing Kotlin as a language for writing build scripts</p>
            </div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-red-500">Corda</div>
              <p className="text-gray-600 text-lg leading-relaxed">Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin</p>
            </div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-green-600">Evernote</div>
              <p className="text-gray-600 text-lg leading-relaxed">Evernote recently integrated Kotlin into their Android client</p>
            </div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-blue-500">Coursera</div>
              <p className="text-gray-600 text-lg leading-relaxed">Coursera Android app is partially written in Kotlin</p>
            </div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-green-700">Spring</div>
              <p className="text-gray-600 text-lg leading-relaxed">Spring makes use of Kotlin's language features to offer more concise APIs</p>
            </div>
            <div className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="h-12 flex items-center mb-6 text-3xl font-bold text-blue-700">Atlassian</div>
              <p className="text-gray-600 text-lg leading-relaxed">All new code in the Trello Android app is in Kotlin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Section */}
      <section className="bg-blue-900/10 py-32 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-purple-400 font-medium mb-4">How about to try?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Start using Kotlin today!<br/>Build your first app in your favorite IDE</h2>
          <a href="#" className="bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-xl font-bold text-lg transition-colors">
            Get started
          </a>
        </div>
      </section>
    </div>
  );
}