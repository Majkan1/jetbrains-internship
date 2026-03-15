
import { useState } from "react";

export default function Index() {

  const [activeWhyTab, setActiveWhyTab] = useState<"Concise" | "Safe" | "Expressive" | "Interoperable" | "Multiplatform">("Concise");
  const [usageSortMode, setUsageSortMode] = useState<"default" | "az">("default");

  const usageHighlights = [
    {
      name: "Gradle",
      logo: "/assets/gradle.svg",
      description: "Gradle is introducing Kotlin as a language for writing build scripts",
    },
    {
      name: "Corda",
      logo: "/assets/corda.svg",
      description: "Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin",
    },
    {
      name: "Evernote",
      logo: "/assets/Evernote.svg",
      description: "Evernote recently integrated Kotlin into their Android client",
    },
    {
      name: "Coursera",
      logo: "/assets/corsera.svg",
      description: "Coursera Android app is partially written in Kotlin",
    },
    {
      name: "Spring",
      logo: "/assets/spring boot.svg",
      description: "Spring makes use of Kotlin's language features to offer more concise APIs",
    },
    {
      name: "Atlassian",
      logo: "/assets/download.svg",
      description: "All new code in the Trello Android app is in Kotlin",
    },
  ];

  const displayedUsageHighlights =
    usageSortMode === "az"
      ? [...usageHighlights].sort((a, b) => a.name.localeCompare(b.name))
      : usageHighlights;

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

  function renderWhyKotlinCode() {
    if (activeWhyTab === "Safe") {
      return (
        <pre className="text-[14px] leading-[1.6] text-[#252525] font-mono whitespace-pre-wrap">
{`fun reply(condition: Boolean): String? =          // Nullability is part of Kotlin's type system
  if (condition) "I'm fine" else null

fun error(): Nothing =                              // Always throw an exception
  throw IllegalStateException("Shouldn't be here")

fun main() {
  val condition = true                              // Try replacing \ 0true\ 0 with \ 0false\ 0 and run the sample!

  val message = reply(condition)                    // The result is nullable
  // println(message.uppercase())                   // This line doesn't compile
  println(message?.replace("fine", "okay"))       // Access a nullable value in a safe manner
  if (message != null) {                            // If you check that the type is right,
    println(message.uppercase())                    // the compiler will smart-cast it for you
  }

  val nonNull: String =                             // If the null-case throws an error,
    reply(condition = true) ?: error()              // Kotlin can infer that the result is non-null
  println(nonNull)
}`}
        </pre>
      );
    }

    if (activeWhyTab === "Expressive") {
      return (
        <pre className="text-[14px] leading-[1.6] text-[#252525] font-mono whitespace-pre-wrap">
{`fun main() {
  val map = mapOf(1 to "one", 2 to "two")
  for ((k, v) in map) {                  // Traverse a map or a list of pairs
    println("$k -> $v")
  }

  fun obtainKnowledge() = Pair("The Answer", 42)  // Single-expression functions

  val (description, answer) = obtainKnowledge()    // Destructure into a pair of two variables
  println("$description: $answer")

  getText()?.let {                                 // Apply an action to a nullable expression
    sendEmailTo("alice@example.com", it)          // if it's not null
  }

  createEmptyWindow()
    .apply {
      width = 300                                  // Configure properties of an object
      height = 200
      isVisible = true
    }.also { w ->                                  // Perform an additional operation on a call chain
      showWindow(w)
    }

  val fixedIssue = issueById["13456"]
    ?.takeIf { it.status == Status.FIXED }         // Use the value only if the condition is true
  println(fixedIssue)
}`}
        </pre>
      );
    }

    if (activeWhyTab === "Interoperable") {
      return (
        <pre className="text-[14px] leading-[1.6] text-[#252525] font-mono whitespace-pre-wrap">
{`// Use any existing JVM library or framework
// Call Kotlin code from Java without an issue

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
  runApplication<DemoApplication>(*args)
}

@RestController
class MessageResource {
  @GetMapping
  fun index(): List<Message> = listOf(
    Message("1", "Hello!"),
    Message("2", "Bonjour!"),
    Message("3", "Privet!"),
  )
}

data class Message(val id: String?, val text: String)
`}
        </pre>
      );
    }

    if (activeWhyTab === "Multiplatform") {
      return (
        <pre className="text-[14px] leading-[1.6] text-[#252525] font-mono whitespace-pre-wrap">
{`// Common
// Declare signatures to use them in the common code
// Provide platform-specific implementations in the platform modules
expect fun randomUUID(): String

expect class PlatformSocket(
  url: String
) {
  fun openSocket(listener: PlatformSocketListener)
  fun closeSocket(code: Int, reason: String)
  fun sendMessage(msg: String)
}

interface PlatformSocketListener {
  fun onOpen()
  fun onFailure(t: Throwable)
  fun onMessage(msg: String)
  fun onClosing(code: Int, reason: String)
}
`}
        </pre>
      );
    }

    return (
      <pre className="text-[14px] leading-[1.6] text-[#252525] font-mono whitespace-pre-wrap">
{`data class Employee(
  val name: String,
  val email: String,
  val company: String
) // + automatically generated equals(), hashCode(), toString(), and copy()

object MyCompany {
  const val name: String = "MyCompany"            // A singleton
}

fun main() {                                       // Function at the top level
  val employee = Employee("Alice",                // No \ 0new\ 0 keyword
    "alice@mycompany.com", MyCompany.name)
  println(employee)
}
`}
      </pre>
    );
  }

  return (
    <div className="min-h-screen bg-[#2f3137] text-white font-sans selection:bg-purple-500 text-base pb-0">
      <div className="flex items-center justify-between px-8 h-16 border-b border-gray">
        <div className="flex items-start gap-1.5">
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
          <a href = "https://github.com/JetBrains/kotlin/releases/tag/v1.6.20"><span className="pt-0.5 text-[14px] leading-none text-[#cfd1d6]">v1.6.20</span></a>
        </div>
        <div className=" grid grid-flow-col items-center auto-cols-max gap-8 h-16">
          <a
            href="#"
            className="relative inline-block py-5 text-white/90 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8f939b] after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Solutions
          </a>
          <a
            href="#"
            className="relative inline-block py-5 text-white/90 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8f939b] after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Docks
          </a>
          <a
            href="#"
            className="relative inline-block py-5 text-white/90 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8f939b] after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Community
          </a>
          <a
            href="#"
            className="relative inline-block py-5 text-white/90 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8f939b] after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Teach
          </a>
          <a
            href="#"
            className="relative inline-block py-5 text-white/90 transition-colors hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#8f939b] after:transition-transform after:duration-200 hover:after:scale-x-100"
          >
            Play
          </a>
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
          <div className="shrink-0">
            <img src="/assets/Logo_backup.svg" alt="JetBrains logo" className="w-[60px] h-auto" />
          </div>
          <div className="text-gray-400 text-sm py--1">
            Developed by <a href="#" className="text-white hover:underline">JetBrains</a> &amp; Open-source <a href="#" className="text-white hover:underline">Contributors</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="bg-[#2f3137] border border-[#5a5f67] p-8 rounded-2xl hover:border-[#767b85] transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-[#3a3f48] rounded-lg mb-6 group-hover:bg-[#4a505b] flex items-center justify-center transition-colors">
              <div className="w-14 h-14">{firstIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Multiplatform Mobile</h3>
            <p className="text-[#b9bcc3] text-sm leading-relaxed">Share the logic of your Android and iOS apps while keeping UX native</p>
          </div>

          <div className="bg-[#2f3137] border border-[#5a5f67] p-8 rounded-2xl hover:border-[#767b85] transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-[#3a3f48] rounded-lg mb-6 group-hover:bg-[#4a505b] flex items-center justify-center transition-colors">
              <div className="w-12 h-12">{secondIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Server-side</h3>
            <p className="text-[#b9bcc3] text-sm leading-relaxed">Modern development experience with familiar JVM technology</p>
          </div>

          <div className="bg-[#2f3137] border border-[#5a5f67] p-8 rounded-2xl hover:border-[#767b85] transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-[#3a3f48] rounded-lg mb-6 group-hover:bg-[#4a505b] flex items-center justify-center transition-colors">
              <div className="w-12 h-12">{thirdIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Frontend</h3>
            <p className="text-[#b9bcc3] text-sm leading-relaxed">Extend your projects to web</p>
          </div>

          <div className="bg-[#2f3137] border border-[#5a5f67] p-8 rounded-2xl hover:border-[#767b85] transition-colors cursor-pointer group">
            <div className="w-16 h-16 bg-[#3a3f48] rounded-lg mb-6 group-hover:bg-[#4a505b] flex items-center justify-center transition-colors">
              <div className="w-30 h-12">{fourthIcon}</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Android</h3>
            <p className="text-[#b9bcc3] text-sm leading-relaxed">Recommended by Google for building Android apps</p>
          </div>
        </div>
        <section className="mt-4 text-sm text-gray-300">
          <a href="/docs/multiplatform.html" className="underline decoration-1 underline-offset-2 hover:text-white transition-colors">Multiplatform for Other Platforms,</a>{" "}
          <a href="/docs/data-science-overview.html" className="underline decoration-1 underline-offset-2 hover:text-white transition-colors">Data Science</a>
        </section>
      </main>

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
          
          <div className="mt-12 flex justify-center">
             <a href="https://blog.jetbrains.com/kotlin/" className="border border-white/20 hover:bg-white/10 px-7 py-4 rounded-[50px] font-semibold transition-colors duration-200 flex justify-center w-40">
               Kotlin blog
             </a>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-32 rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-24">Why Kotlin</h2>
          
          <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Modern, concise and safe programming language</h3>
              <p className="text-gray-600 text-lg mb-8">Easy to pick up, so you can create powerful applications immediately.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Get started</a>
            </div>
            <div className="md:col-span-7 bg-[#efefef] rounded-xl p-4 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="flex gap-8 border-b border-gray-300 px-2 overflow-x-auto">
                <button type="button" onClick={() => setActiveWhyTab("Concise")} className={`whitespace-nowrap text-[17px] pb-3 border-b-2 transition-colors ${activeWhyTab === "Concise" ? "text-[#1f6fff] border-[#1f6fff]" : "text-[#424242] border-transparent hover:text-black"}`}>Concise</button>
                <button type="button" onClick={() => setActiveWhyTab("Safe")} className={`whitespace-nowrap text-[17px] pb-3 border-b-2 transition-colors ${activeWhyTab === "Safe" ? "text-[#1f6fff] border-[#1f6fff]" : "text-[#424242] border-transparent hover:text-black"}`}>Safe</button>
                <button type="button" onClick={() => setActiveWhyTab("Expressive")} className={`whitespace-nowrap text-[17px] pb-3 border-b-2 transition-colors ${activeWhyTab === "Expressive" ? "text-[#1f6fff] border-[#1f6fff]" : "text-[#424242] border-transparent hover:text-black"}`}>Expressive</button>
                <button type="button" onClick={() => setActiveWhyTab("Interoperable")} className={`whitespace-nowrap text-[17px] pb-3 border-b-2 transition-colors ${activeWhyTab === "Interoperable" ? "text-[#1f6fff] border-[#1f6fff]" : "text-[#424242] border-transparent hover:text-black"}`}>Interoperable</button>
                <button type="button" onClick={() => setActiveWhyTab("Multiplatform")} className={`whitespace-nowrap text-[17px] pb-3 border-b-2 transition-colors ${activeWhyTab === "Multiplatform" ? "text-[#1f6fff] border-[#1f6fff]" : "text-[#424242] border-transparent hover:text-black"}`}>Multiplatform</button>
              </div>

              <div className="px-8 py-6 overflow-x-auto">
                {renderWhyKotlinCode()}
              </div>
            </div>
          </div>

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

          <div className="grid md:grid-cols-12 gap-16 items-center mb-32">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-bold mb-6">Cross-platform layer for native applications</h3>
              <p className="text-gray-600 text-lg mb-8">Share application logic between web, mobile, and desktop platforms while keeping an experience native to users.<br/><br/>Save time and get the benefit of unlimited access to features specific to these platforms.</p>
              <a href="#" className="border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors">Learn about Kotlin Multiplatform</a>
            </div>
            <img src="/assets/Logo.svg" alt="Kotlin logo" className="md:col-span-7 w-[520px] md:w-[760px] h-auto justify-self-center" />
          </div>

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

      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-16 gap-6">
             <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Kotlin Usage Highlights</h2>
             <button
               type="button"
               onClick={() => setUsageSortMode((prev) => (prev === "default" ? "az" : "default"))}
               className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
             >
               {usageSortMode === "default" ? "Sort: Default" : "Sort: A-Z"}
             </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedUsageHighlights.map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 p-10 rounded-2xl hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
                <div className="h-12 flex items-center mb-6">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-10 w-auto object-contain" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 border-t border-white/20"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom left, #ef4a5f 0%, rgba(239, 74, 95, 0) 40%), radial-gradient(circle at top left, #b34fcb 0%, rgba(179, 79, 203, 0) 50%), radial-gradient(circle at top right, #6d5eff 0%, rgba(109, 94, 255, 0) 60%), linear-gradient(90deg, #aa4ac2 0%, #7657ff 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-5.5 text-left">
          <p style = {{color:'rgba(255, 255, 255, 0.7))'}}className=" font-4 mb-4">How about to try?</p>
          <h2 className="text-[72px] font-bold mb-10 leading-tight">Start using Kotlin today!<br/>Build your first app in your favorite IDE</h2>
          <a href="#" className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-3xl text-lg transition-colors">
            Get started
          </a>
        </div>
      </section>
      <section className="bg-[#27282c] text-white px-8 py-10">
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 font-bold">
              <span>Stay in touch:</span>
              <a target="_blank" href="https://github.com/JetBrains/kotlin" title="Kotlin on GitHub" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.9 9.2a8.94 8.94 0 01-6.4 8.6.392.392 0 01-.4-.4v-3a1.58 1.58 0 00-.5-1.2 3.734 3.734 0 003.9-3.4 4.244 4.244 0 00-.9-3.5c.29-.79.217-1.669-.2-2.4a7.24 7.24 0 00-2.4.9c-1.44-.4-2.96-.4-4.4 0a4.62 4.62 0 00-2.3-.9h-.1A2.75 2.75 0 004 6.3a4.075 4.075 0 00-.9 3.5A3.81 3.81 0 007 13.2c-.198.148-.34.36-.4.6a2.638 2.638 0 00-.1.7 1.943 1.943 0 01-2.2-.5c-.5-.8-.9-1.2-1.4-1.3-.5-.1-.6.2-.6.2.079.26.26.476.5.6.387.216.674.575.8 1a1.827 1.827 0 001.2 1.2 3.915 3.915 0 001.9 0v1.7a.297.297 0 01-.4.3A8.82 8.82 0 010 9.2a8.95 8.95 0 0117.9 0z" fill="currentColor"></path></svg>
              </a>
              <a target="_blank" href="https://twitter.com/kotlin" title="Kotlin on Twitter" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.29 16.25A11.59 11.59 0 0018 4.58v-.53a8.3 8.3 0 002-2.13 8.36 8.36 0 01-2.36.65A4.16 4.16 0 0019.45.3a8.19 8.19 0 01-2.61 1 4.11 4.11 0 00-7 3.75A11.7 11.7 0 011.39.75a4.11 4.11 0 001.27 5.48A4.06 4.06 0 01.8 5.71a4.11 4.11 0 003.29 4 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.83 2.85A8.25 8.25 0 011 14.47a7.94 7.94 0 01-1-.06 11.69 11.69 0 006.29 1.84z" fill="currentColor"></path></svg>
              </a>
              <a target="_blank" href="https://surveys.jetbrains.com/s3/kotlin-slack-sign-up" title="Kotlin Slack" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.63 9.49a1.895 1.895 0 00-1.89 1.89v4.73a1.89 1.89 0 103.78 0v-4.73a1.895 1.895 0 00-1.89-1.89zM.01 11.38a1.89 1.89 0 103.78 0V9.49H1.91a1.897 1.897 0 00-1.9 1.89zM6.63 0a1.89 1.89 0 100 3.78h1.89v-1.9A1.886 1.886 0 006.63 0zM1.89 8.53h4.74a1.89 1.89 0 100-3.78H1.89a1.89 1.89 0 000 3.78zm14.2-3.79a1.895 1.895 0 00-1.89 1.89v1.89h1.89a1.89 1.89 0 100-3.78zM9.48 1.89v4.74a1.89 1.89 0 103.78 0V1.89a1.89 1.89 0 10-3.78 0zm3.78 14.22a1.895 1.895 0 00-1.89-1.89H9.48v1.89a1.89 1.89 0 103.78 0zm2.85-6.62h-4.74a1.89 1.89 0 100 3.78h4.74a1.89 1.89 0 100-3.78z" fill="currentColor"></path></svg>
              </a>
              <a target="_blank" href="https://www.reddit.com/r/Kotlin/" title="Kotlin on Reddit" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9.068a2.183 2.183 0 00-2.186-2.186 2.2 2.2 0 00-1.524.61c-1.505-1.076-3.566-1.775-5.86-1.865L11.434.932l3.261.699a1.559 1.559 0 003.119-.072A1.56 1.56 0 0016.254 0c-.609 0-1.147.358-1.397.878l-3.638-.77a.381.381 0 00-.287.053.347.347 0 00-.161.251L9.659 5.645c-2.33.072-4.426.77-5.95 1.864a2.2 2.2 0 00-1.523-.61 2.183 2.183 0 00-.896 4.176c-.036.22-.054.441-.053.664 0 3.368 3.924 6.11 8.763 6.11s8.764-2.723 8.764-6.11c0-.223-.018-.444-.054-.664A2.208 2.208 0 0020 9.069zm-15.018 1.56a1.56 1.56 0 013.118 0c0 .86-.698 1.559-1.559 1.559-.86.017-1.559-.7-1.559-1.56zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 010-.573.4.4 0 01.574 0c.68.68 2.115.913 3.136.913 1.022 0 2.473-.232 3.136-.913a.401.401 0 01.574 0 .436.436 0 010 .573zm-.287-2.563a1.56 1.56 0 010-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558z" fill="currentColor"></path></svg>
              </a>
              <a target="_blank" href="https://stackoverflow.com/questions/tagged/kotlin" title="Kotlin on Stack Overflow" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="16" height="19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.527 17.27V12.19h1.685v6.764H0v-6.763h1.685v5.078h11.842z" fill="currentColor"></path><path d="M3.546 11.71l8.274 1.73.35-1.664-8.274-1.73-.35 1.664zM4.64 7.77l7.661 3.568.7-1.532-7.66-3.59-.7 1.554zm2.123-3.765l6.501 5.407 1.073-1.292-6.501-5.406-1.073 1.291zM10.966 0L9.609 1.007l5.034 6.785L16 6.785 10.966 0zM3.37 15.562h8.448v-1.685H3.371v1.685z" fill="currentColor"></path></svg>
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw" title="Kotlin on YouTube" className="inline-flex items-center text-white hover:opacity-75">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.005 5.617c.43.633.702 1.36.795 2.119.124 1.146.191 2.299.2 3.452v1.618a34.375 34.375 0 01-.2 3.454 4.808 4.808 0 01-.795 2.116 2.772 2.772 0 01-2.003.904c-2.8.215-7.002.222-7.002.222s-5.2-.05-6.8-.214a3.27 3.27 0 01-2.205-.912 4.8 4.8 0 01-.795-2.117 34.354 34.354 0 01-.2-3.453v-1.618c.009-1.154.075-2.306.2-3.452.093-.76.365-1.486.795-2.12a2.76 2.76 0 012.003-.901c2.799-.217 6.997-.217 6.997-.217h.01s4.198 0 6.997.217a2.76 2.76 0 012.003.902zM15.755 12L9.501 8.249v7.502L15.754 12z" fill="currentColor"></path></svg>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-0 text-sm">
              <a href="https://kotlinlang.org/docs/contribute.html" className="text-white hover:underline">Contributing to Kotlin</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="https://kotlinlang.org/docs/releases.html" className="text-white hover:underline">Releases</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="https://kotlinlang.org/assets/kotlin-media-kit.pdf" className="text-white hover:underline">Press Kit</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="https://kotlinlang.org/docs/security.html" className="text-white hover:underline">Security</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="https://blog.jetbrains.com/kotlin/" className="text-white hover:underline">Blog</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="https://youtrack.jetbrains.com/issues/KT" className="text-white hover:underline">Issue Tracker</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="/assets/kotlin_logos.zip" download="kotlin_logos.zip" className="text-white hover:underline">Brand Assets</a>
              <span className="mx-2 text-gray-500">|</span>
              <span className="text-white">Careers</span>
            </div>
            <p className="text-sm text-gray-400">
              Kotlin™ is protected under the{" "}
              <a href="https://kotlinfoundation.org/" className="underline hover:opacity-75">Kotlin Foundation</a>
              {" "}and licensed under the{" "}
              <a href="https://github.com/JetBrains/kotlin-web-site/blob/master/LICENSE" className="underline hover:opacity-75">Apache 2 license</a>.
            </p>
          </div>
          <div className="flex flex-col items-end justify-between gap-4 shrink-0">
            <a href = "https://www.jetbrains.com/"><svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60"><path d="M60 0H0v60h60V0z" fill="#000"></path><path d="M27.648 48.706H5.178v3.765h22.47v-3.765zM4.941 15.765l1.765-1.647c.47.588.941.941 1.53.941.705 0 1.058-.47 1.058-1.412V7.412H12v6.235c0 1.177-.353 2.118-.94 2.706-.59.588-1.53.941-2.707.941-1.765.118-2.706-.588-3.412-1.529zM12.586 7.53h7.883v2.235h-5.177v1.529h4.706v2.118h-4.706v1.53h5.294v2.352h-7.882l-.118-9.765zM24 9.882h-2.941V7.53h8.588v2.353h-2.941v7.412H24V9.882zM5.177 19.53h5.06c1.175 0 2.117.352 2.705.823.353.353.588.941.588 1.647 0 1.177-.588 1.765-1.53 2.235 1.177.353 1.883 1.06 1.883 2.353 0 1.647-1.412 2.706-3.647 2.706H5.177V19.53zm5.647 3.058c0-.588-.47-.823-1.176-.823H7.883v1.764H9.53c.824-.117 1.294-.352 1.294-.94zm-.94 2.824H7.764v1.765h2.118c.824 0 1.294-.353 1.294-.942 0-.588-.47-.823-1.294-.823zM14.352 19.53h4.588c1.53 0 2.471.352 3.177 1.058.588.589.823 1.294.823 2.236 0 1.53-.823 2.47-2 3.058l2.353 3.412h-3.058l-2-2.94h-1.177v2.94h-2.706V19.53zm4.47 4.705c.942 0 1.413-.47 1.413-1.176 0-.824-.589-1.177-1.412-1.177h-1.765v2.353h1.765z" fill="#fff"></path><path d="M26.119 19.53h2.588l4.117 9.882h-2.94l-.707-1.765h-3.764l-.706 1.765h-2.824l4.236-9.883zm2.352 5.882l-1.058-2.706-1.06 2.706h2.118zM33.177 19.53h2.706v9.764h-2.706V19.53zM36.588 19.53h2.471l4 5.176v-5.177h2.706v9.765h-2.353L39.294 24v5.412h-2.706v-9.883zM46 27.883l1.529-1.765c.941.824 2 1.177 3.176 1.177.706 0 1.177-.236 1.177-.706s-.353-.588-1.647-.941c-2.118-.47-3.647-1.06-3.647-3.06 0-1.764 1.411-3.176 3.764-3.176 1.648 0 2.942.47 4 1.294l-1.411 1.883c-.942-.588-1.883-.941-2.706-.941-.706 0-.941.235-.941.588 0 .47.353.588 1.647.941 2.235.47 3.647 1.177 3.647 3.059 0 2-1.53 3.176-4 3.176-1.765.118-3.412-.47-4.589-1.53z" fill="#fff"></path></svg></a>
            <p className="text-sm text-gray-400">
              Supported and developed by{" "}
              <a href="https://www.jetbrains.com" className="underline hover:opacity-75">JetBrains</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}