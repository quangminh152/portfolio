// import React from 'react';

// export const CaseStudy: React.FC = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative w-full h-[100dvh] flex flex-col justify-center px-[6vw] lg:px-[10vw]">
//         {/* Animated Background Dots */}
//         <div className="absolute inset-0 z-0 animate-drift" 
//              style={{
//                backgroundImage: 'radial-gradient(circle, #E5E7EB 1.5px, transparent 1.5px)',
//                backgroundSize: '24px 24px'
//              }}>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-white pointer-events-none z-[1]"></div>

//         <div className="relative z-10 max-w-[1200px]">
//           <h1 className="text-[clamp(48px,8vw,120px)] font-medium leading-none tracking-tight mb-10">
//             Bounce Dispatch 
//             <span className="block text-[#a6abb4] mt-2">to Multiple Vehicles</span>
//           </h1>
//           <h2 className="text-[clamp(20px,2vw,28px)] font-normal text-gray-500 max-w-[800px] leading-relaxed">
//             Reducing ride cancellation rates by offering flexible vehicle options during peak hours.
//           </h2>
//         </div>
//       </section>

//       {/* Content Body */}
//       <article className="max-w-[800px] mx-auto px-6 py-24">
        
//         {/* Background & Overview */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">Background & Overview</h2>
//           <aside className="bg-gray-100 p-8 rounded-xl my-8">
//             <div className="text-2xl mb-4">🛵</div>
//             <p className="mb-4">
//               <strong className="font-semibold">be</strong> is a platform that focuses mainly on transportation booking services, with the main target being the working age group, office workers.
//             </p>
//             <p className="mb-4">
//               During peak hours, the number of requests is very large, causing the system to take more time to find drivers for customers, causing <strong className="font-semibold">long wait times</strong>. That causes a number of effects:
//             </p>
//             <ul className="list-disc pl-5 space-y-2 ml-4">
//               <li>Reduces the experience, affecting customers' mood.</li>
//               <li>Increase the trip cancellation rate.</li>
//               <li>Customers request rides through other platforms.</li>
//             </ul>
//           </aside>
//         </section>

//         <hr className="border-gray-100 my-16" />

//         {/* What's the issue? */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">What’s the issue?</h2>
//           <ol className="list-decimal pl-5 space-y-4 mb-12 marker:text-gray-400 marker:font-medium ml-4">
//             <li>During the steps of booking a ride on Be, after users confirm a vehicle they have chosen and proceed to make a booking, the next step will be to search for a driver.</li>
//             <li>Previously, if the system could not find any nearby driver after a while, it would suggest <strong className="font-semibold">selecting another vehicle</strong> to expand the search, aiming to increase the ability to <strong className="font-semibold">find a driver</strong> and <strong className="font-semibold">decrease trip cancellations</strong>.</li>
//             <li>However, the measured indicators show that this method is <strong className="font-semibold">not completely optimal</strong>.</li>
//           </ol>

//           <figure className="my-12">
//             <img 
//               src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/e24261cd-f322-492a-95d3-d946f8dccff1/Previous.gif" 
//               alt="Previous flow showing single vehicle selection"
//               className="w-full rounded-xl border border-gray-100 shadow-sm"
//             />
//             <figcaption className="text-sm text-gray-500 mt-4 text-center">
//               Previously, riders can only accept to request 1 more vehicle to expand the search upon the current vehicle.
//             </figcaption>
//           </figure>

//           <h3 className="text-xl font-medium mb-4">How might we…</h3>
//           <ul className="list-disc pl-5 space-y-2 mb-8 ml-4">
//             <li>Reduce the waiting time, increase the chance of users getting a driver when booking a ride during peak hours?</li>
//             <li>Reduce the cancelation rate due to the long waiting, or when there are no drivers to be found?</li>
//           </ul>

//           <aside className="bg-bg-gray p-8 rounded-xl my-8">
//             <div className="text-2xl mb-4">💭</div>
//             <p>
//               <strong className="font-semibold">Assumption</strong><br/>
//               What if <strong className="font-semibold">be</strong> can give users more options and more flexibility in requesting additional vehicles, it would increase the chance of having drivers faster.
//             </p>
//           </aside>
//         </section>

//         <hr className="border-gray-100 my-16" />

//         {/* Measuring the success */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">Measuring the success</h2>
//           <aside className="bg-bg-gray p-8 rounded-xl my-8">
//             <div className="text-2xl mb-4">🎯</div>
//             <p className="mb-4">Goals and Objectives</p>
//             <div className="space-y-4">
//               <div>
//                 <strong className="block font-semibold mb-1">1. Increase CR, CTR:</strong>
//                 <ul className="list-disc pl-5 ml-4">
//                   <li>Increase the chance of customers successfully booking, completing rides.</li>
//                   <li>Increase the rate of drivers accepting requests.</li>
//                 </ul>
//               </div>
//               <div>
//                 <strong className="block font-semibold">2. Reduce the Ride Cancellation Rate.</strong>
//               </div>
//             </div>
//           </aside>

//           <div className="my-12">
//             <img 
//               src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/f3f63b60-f5cc-442d-afc4-aed10e9e76b2/Untitled.png" 
//               alt="Success metrics graph"
//               className="w-full rounded-xl border border-gray-100 shadow-sm"
//             />
//           </div>
//         </section>

//         <hr className="border-gray-100 my-16" />

//         {/* Gathering the insights */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">Gathering the insights</h2>
          
//           <h3 className="text-xl font-medium mb-4">What do stakeholders say?</h3>
//           <ul className="list-disc pl-5 space-y-2 mb-8 ml-4">
//             <li>I conducted interviews with stakeholders to gain more understanding of how the old flow and logic worked, as well as to be able to fully understand the business requirement.</li>
//             <li>I also have several random users interviewed to gather more insights on the behaviors and needs.</li>
//           </ul>

//           <aside className="bg-bg-gray p-8 rounded-xl my-8">
//             <div className="mb-2"><strong className="font-semibold">📌 Key takeaways</strong></div>
//             <ul className="list-disc pl-5 space-y-2 ml-4">
//               <li>Customers who are in urgent need of transportation, they want to increase the possibility of having a driver picked up during high-demand/peak hours, reducing the waiting time.</li>
//               <li>They also have considerations in terms of pricing when it comes to requesting for additional options.</li>
//             </ul>
//           </aside>

//           <h3 className="text-xl font-medium mt-12 mb-4">Analyzing the competitors</h3>
//           <p className="mb-8">
//             At the time being (Dec 2023), there were not many (if there weren’t any) big ride hailing applications that provide this feature, except those are from China that I discovered. DiDi is an example of the biggest ride hailing service in China.
//           </p>

//           <aside className="bg-bg-gray p-8 rounded-xl my-8 space-y-8">
//             <div className="flex items-center gap-3 mb-4">
//               <span className="text-2xl">🚗</span> 
//               <strong className="font-semibold">DiDi Chuxing</strong>
//             </div>

//             <div className="space-y-6">
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/e4e0ae1b-0571-4938-8d3e-6b2b7a7ad591/Untitled.png" 
//                 alt="DiDi interface 1"
//                 className="w-full rounded-lg"
//               />
//               <p className="text-sm text-gray-500 text-center">DiDi is a leading ride-hailing app in China.</p>
              
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/c8d19be5-578a-40a9-a958-1fc4fa55b88c/Untitled.png" 
//                 alt="DiDi interface 2"
//                 className="w-full rounded-lg"
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-8 mt-8">
//               <div>
//                 <strong className="block mb-4 text-green-600">👍 Strengths</strong>
//                 <ul className="space-y-4 text-sm">
//                   <li>
//                     <strong>Checkbox UI for selecting vehicles:</strong>
//                     <br/><span className="text-gray-600">→ Enhances user awareness by allowing the selection of multiple vehicle types simultaneously.</span>
//                   </li>
//                   <li>
//                     <strong>Clear payment information and process:</strong>
//                     <br/><span className="text-gray-600">→ Improves learnability, making it easier for users to understand payment procedures.</span>
//                   </li>
//                   <li>
//                     <strong>Display of requested vehicle types and search status for each type:</strong>
//                     <br/><span className="text-gray-600">→ Further boosts learnability by providing transparency about search progress.</span>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <strong className="block mb-4 text-red-600">👎 Weaknesses</strong>
//                 <ul className="space-y-4 text-sm">
//                   <li>
//                     <strong>No option to select/deselect all vehicles at once:</strong>
//                     <br/><span className="text-gray-600">→ Increases user effort, especially when multiple vehicle types are involved.</span>
//                   </li>
//                   <li>
//                     <strong>Map area is heavily obscured:</strong>
//                     <br/><span className="text-gray-600">→ Reduces visibility, making it difficult for users to confirm their location and destination on the map.</span>
//                   </li>
//                   <li>
//                     <strong>Unnecessary status information for each vehicle type:</strong>
//                     <br/><span className="text-gray-600">→ Users only need to know when a driver has been assigned and is en route, making status updates for each vehicle type redundant.</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </aside>

//           <aside className="bg-bg-gray p-8 rounded-xl my-8">
//             <div className="mb-2"><strong className="font-semibold">💡 Key takeaways</strong></div>
//             <ul className="list-disc pl-5 space-y-2 ml-4">
//               <li><strong className="font-semibold">Using checkboxes UI is intuitive</strong>, allowing customers to easily understand that they can select multiple vehicle types at once.</li>
//               <li><strong className="font-semibold">Displaying the number and names of selected vehicles</strong> is crucial for transparency and ensuring users are aware of their choices.</li>
//               <li><strong className="font-semibold">Clear payment information</strong> is essential for building trust, as it reassures customers and enhances their confidence when using the feature.</li>
//             </ul>
//           </aside>

//           <h3 className="text-xl font-medium mt-12 mb-4">Opportunity</h3>
//           <ul className="list-disc pl-5 space-y-2 mb-8 ml-4">
//             <li>Allow users to select additional vehicle options while searching for a driver if one hasn't been found after a certain period of time.</li>
//             <li>Customers will have more vehicle options to request, allowing them to compare ride fares across different choices.</li>
//           </ul>

//           <h3 className="text-xl font-medium mt-12 mb-4">Solution structure overview</h3>
//           <img 
//             src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/c254dd83-280d-4c8a-a3f9-6bb4ec8ddea7/image.png" 
//             alt="Solution structure overview diagram"
//             className="w-full rounded-xl border border-gray-100 shadow-sm mt-4"
//           />
//         </section>

//         <hr className="border-gray-100 my-16" />

//         {/* The results */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">The results</h2>
          
//           <h3 className="text-xl font-medium mb-4">Main use cases and flows presentation</h3>
//           <p className="mb-12">Based on the blueprint, I began building the user interface, demoing all use cases and flows, and documenting the proposed display logic in detail.</p>

//           <div className="space-y-20">
//             {/* Flow 1 */}
//             <div>
//               <strong className="block text-lg font-medium mb-4">1. Book ride → Find driver normal flow</strong>
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/921045a4-6380-4f96-91ab-45162b572908/image.png"
//                 alt="Book ride flow"
//                 className="w-full rounded-xl border border-gray-100 shadow-sm"
//               />
//               <p className="text-sm text-gray-500 mt-4 text-center">After users confirm and book a ride, the app begins searching for a driver of the selected vehicle as usual.</p>
//             </div>

//             {/* Flow 2 */}
//             <div>
//               <strong className="block text-lg font-medium mb-4">2. Driver isn’t found after &#123;x&#125; amount of time → Bounce vehicles</strong>
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/4aaf21e6-22b9-44d3-bdaa-76d78bc53869/image.png"
//                 alt="Bounce vehicle flow"
//                 className="w-full rounded-xl border border-gray-100 shadow-sm"
//               />
//               <p className="text-sm text-gray-500 mt-4 text-center">If a driver isn't found within &#123;x&#125; time, the system will present alternative vehicles for users to choose from.</p>
//             </div>

//             {/* Flow 3 */}
//             <div>
//               <strong className="block text-lg font-medium mb-4">3. Users select to add more vehicles</strong>
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/0941779f-9e11-4ec1-b1cd-5df99cc156d8/image.png"
//                 alt="Adding more vehicles flow"
//                 className="w-full rounded-xl border border-gray-100 shadow-sm"
//               />
//               <p className="text-sm text-gray-500 mt-4 text-center">
//                 Select additional vehicles to allow the system to expand the search for more options. <br/>
//                 For users who paid by non-cash methods, a note will indicate that any fee difference will be charged or refunded after the trip is completed.
//               </p>
//             </div>

//             {/* Flow 4 */}
//             <div>
//               <strong className="block text-lg font-medium mb-4">4. Swipe up</strong>
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/25f4324b-a56c-4535-804f-fe6e568aa636/image.png"
//                 alt="Swipe up flow"
//                 className="w-full rounded-xl border border-gray-100 shadow-sm"
//               />
//               <p className="text-sm text-gray-500 mt-4 text-center">Swipe up to view the full list of available rides, detailed ride information, and the option to cancel your ride.</p>
//             </div>

//             {/* Flow 5 */}
//             <div>
//               <strong className="block text-lg font-medium mb-4">5. Found a driver</strong>
//               <img 
//                 src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/526bc5a8-aa6d-43df-be24-b4acb85c9616/image.png"
//                 alt="Found driver flow"
//                 className="w-full rounded-xl border border-gray-100 shadow-sm"
//               />
//               <p className="text-sm text-gray-500 mt-4 text-center">Once a driver is found, display a toast message to notify users of the confirmed vehicle booking.</p>
//             </div>
//           </div>

//           <div className="mt-20">
//             <h3 className="text-xl font-medium mb-6">Achievements</h3>
//             <ul className="list-disc pl-5 space-y-3 ml-4">
//               <li>Within 20 days of release, the selection rate (users accepting at least one suggested vehicle) increased by approximately <strong className="font-semibold">↑2%</strong> of total rides.</li>
//               <li>The number of additional trips from bounce dispatch reached around <strong className="font-semibold">+80k per month</strong>.</li>
//             </ul>
//           </div>
//         </section>

//         <hr className="border-gray-100 my-16" />

//         {/* What's next */}
//         <section className="mb-24">
//           <h2 className="text-3xl font-semibold mb-8">✨ What’s next?</h2>
//           <p className="mb-8">
//             Introduce the option to request multiple vehicle types during the pre-booking stage. This will significantly increase the chances of having a driver more quickly.
//           </p>
//           <img 
//             src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/e1803e0f-1ecd-410a-8e82-c3d4643ff6be/image.png" 
//             alt="Next steps mockups"
//             className="w-full rounded-xl border border-gray-100 shadow-sm"
//           />
//         </section>

//         <div className="text-center text-gray-400 font-medium py-10">
//           Thanks for scrolling 😃
//         </div>
//       </article>
//     </div>
//   );
// };

import React from 'react';

// 1. CONFIGURATION DATA
const PROJECT_META = {
  title: "Bounce Dispatch to Multiple Vehicles",
  subtitle: "Reducing ride cancellation rates by offering flexible vehicle options during peak hours.",
  details: [
    { icon: "🏷️", label: "Tags", value: ["New Feature", "Product Design"].map(tag => <span key={tag} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">{tag}</span>) },
    { icon: "🛠️", label: "Tools", value: "Figma" },
    { icon: "📝", label: "Description", value: "A feature that allows customers to select other vehicles as additional options after requesting a ride, when the system is finding a driver." },
    { icon: "📅", label: "Released on", value: "Q1/2024" },
    { icon: "👥", label: "Team size", value: "1 Product Designer, 1 Product Owner, 1 Product Manager" },
  ]
};

const CHAPTERS = [
  { id: "overview", label: "Background & Overview" },
  { id: "problem", label: "What’s the issue?" },
  { id: "metrics", label: "Measuring the success" },
  { id: "insights", label: "Gathering the insights" },
  { id: "results", label: "The results" },
  { id: "next", label: "✨ What’s next?" },
];

export const CaseStudy: React.FC = () => {
  return (
    <div className="w-full bg-white">
      
      {/* --- HERO SECTION (Full Width) --- */}
      {/* Changed: Removed max-w-[1200px] so it fills the screen minus margins */}
      <div className="w-full px-[6vw] lg:px-[10vw] pt-32 pb-8">
        
        {/* 1. Hero Image */}
        <div className="w-full aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-sm">
            <img 
              src="/assets/bounce-multiple-vehicles.png" 
              alt="Project Cover" 
              className="w-full h-full object-cover"
            />
        </div>

        {/* 2. Title & Subtitle */}
        {/* Max-width applied here for readability, but image stays wide */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-[clamp(32px,5vw,48px)] font-bold leading-tight text-[#111] mb-4">
            {PROJECT_META.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {PROJECT_META.subtitle}
          </p>
        </div>

        {/* 3. Meta Info Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 py-10 border-t border-gray-100">
          {PROJECT_META.details.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-2xl mr-4 mt-1 leading-none" role="img" aria-label={item.label}>{item.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm uppercase tracking-wide opacity-80">{item.label}</h4>
                <div className="text-gray-700 text-base leading-relaxed">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CONTENT CONTAINER (Centered for Reading) --- */}
      {/* We keep this constrained to 800px so lines aren't too long to read */}
      <article className="w-full max-w-[800px] mx-auto px-[6vw] pb-32">
        
        {/* --- VERTICAL TABLE OF CONTENTS --- */}
        <div className="mb-24 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Table of Contents</h3>
          <ul className="space-y-3">
            {CHAPTERS.map(chapter => (
              <li key={chapter.id}>
                <a 
                  href={`#${chapter.id}`}
                  className="text-lg text-gray-500 hover:text-black hover:underline underline-offset-4 decoration-1 transition-all duration-200"
                >
                  {chapter.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- MAIN SECTIONS --- */}
            
        {/* ID: overview */}
        <section id="overview" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">Background & Overview</h2>
          <aside className="bg-gray-50 p-8 rounded-xl my-6">
            <div className="text-2xl mb-4">🛵</div>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong className="font-semibold text-black">be</strong> is a platform that focuses mainly on transportation booking services. During peak hours, the system struggles to find drivers, leading to <strong className="font-semibold text-black">long wait times</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2 ml-4 text-gray-700 leading-relaxed">
              <li>Reduces user experience and mood.</li>
              <li>Increases trip cancellation rates.</li>
              <li>Users switch to competitor platforms.</li>
            </ul>
          </aside>
        </section>

        {/* ID: problem */}
        <section id="problem" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">What’s the issue?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            <span className="text-black font-semibold">1.</span> Previously, if the system could not find a nearby driver after a while, it would suggest <strong className="font-semibold text-black">selecting another vehicle</strong> to expand the search.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            <span className="text-black font-semibold">2.</span> However, the measured indicators show that this method is <strong className="font-semibold text-black">not completely optimal</strong> as users could only select one alternative at a time.
          </p>
          
          <figure className="my-12">
            <img 
              src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/e24261cd-f322-492a-95d3-d946f8dccff1/Previous.gif" 
              alt="Previous Flow" 
              className="w-full rounded-xl bg-gray-50 border border-gray-100"
            />
            <figcaption className="text-center text-sm text-gray-400 mt-4">The old single-selection flow</figcaption>
          </figure>

          <h3 className="text-2xl font-semibold mb-4 mt-12">How might we…</h3>
          <ul className="list-disc pl-5 space-y-3 mb-8 ml-4 text-gray-700 leading-relaxed text-lg">
            <li>Reduce the waiting time, increase the chance of users getting a driver when booking a ride during peak hours?</li>
            <li>Reduce the cancelation rate due to the long waiting, or when there are no drivers to be found?</li>
          </ul>
        </section>

        {/* ID: metrics */}
        <section id="metrics" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">Measuring the success</h2>
          <aside className="bg-gray-50 p-8 rounded-xl my-6 border border-gray-100">
            <div className="text-2xl mb-4">🎯</div>
            <p className="mb-4 font-semibold text-lg">Goals and Objectives</p>
            <div className="space-y-6">
              <div>
                <strong className="block font-semibold text-black mb-2">1. Increase CR, CTR:</strong>
                <ul className="list-disc pl-5 ml-4 text-gray-700 leading-relaxed space-y-1">
                  <li>Increase the chance of customers successfully booking, completing rides.</li>
                  <li>Increase the rate of drivers accepting requests.</li>
                </ul>
              </div>
              <div>
                <strong className="block font-semibold text-black">2. Reduce the Ride Cancellation Rate.</strong>
              </div>
            </div>
          </aside>
        </section>

        {/* ID: insights */}
        <section id="insights" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">Gathering the insights</h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            I analyzed competitors like DiDi Chuxing (China). Key strengths included checkbox UIs for selecting multiple vehicles, but weaknesses included cluttered map interfaces.
          </p>
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <strong className="block text-blue-900 text-lg mb-3">💡 Key Takeaway</strong>
            <ul className="list-disc pl-5 space-y-2 ml-4 text-blue-800 leading-relaxed">
              <li>Using <strong className="font-semibold">checkboxes UI is intuitive</strong> for selecting multiple options.</li>
              <li>It's crucial to <strong className="font-semibold">display selected vehicles</strong> for transparency.</li>
              <li><strong className="font-semibold">Clear payment information</strong> builds trust.</li>
            </ul>
          </div>
        </section>

        {/* ID: results */}
        <section id="results" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">The results</h2>
          <p className="mb-8 text-gray-600 leading-relaxed text-lg">
            Based on the blueprint, I began building the user interface, demoing all use cases and flows, and documenting the proposed display logic in detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/921045a4-6380-4f96-91ab-45162b572908/image.png" className="rounded-xl border border-gray-100 shadow-sm" alt="Flow 1" />
            <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/4aaf21e6-22b9-44d3-bdaa-76d78bc53869/image.png" className="rounded-xl border border-gray-100 shadow-sm" alt="Flow 2" />
          </div>

          <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 bg-green-50 p-4 rounded-lg border border-green-100">
                <span className="text-green-600 font-bold text-2xl leading-none">✓</span>
                <p className="text-green-900 leading-relaxed">Selection rate increased by <strong className="text-black">~2%</strong> of total rides within 20 days.</p>
            </li>
            <li className="flex items-start gap-4 bg-green-50 p-4 rounded-lg border border-green-100">
                <span className="text-green-600 font-bold text-2xl leading-none">✓</span>
                <p className="text-green-900 leading-relaxed">Additional trips from bounce dispatch reached <strong className="text-black">+80k per month</strong>.</p>
            </li>
          </ul>
        </section>
        
        {/* ID: next */}
        <section id="next" className="scroll-mt-32 mb-24">
          <h2 className="text-3xl font-bold mb-8 text-[#111]">✨ What’s next?</h2>
          <p className="mb-8 text-gray-600 leading-relaxed text-lg">
            Introduce the option to request multiple vehicle types during the pre-booking stage. This will significantly increase the chances of having a driver more quickly.
          </p>
          <img 
            src="https://prod-files-secure.s3.us-west-2.amazonaws.com/c2c1ad12-5dbb-4db4-82e0-532f7d02e63e/e1803e0f-1ecd-410a-8e82-c3d4643ff6be/image.png" 
            alt="Next steps mockups"
            className="w-full rounded-xl border border-gray-100 shadow-sm"
          />
        </section>

      </article>
    </div>
  );
};