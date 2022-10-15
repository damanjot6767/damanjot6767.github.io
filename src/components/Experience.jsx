import React from "react";


const Experience=()=>{
    
    const image=[
        {
            id:1,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            style:"shadow-orange-500",
            title:"HTML"
        },
        {
            id:2,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            style:"shadow-blue-500",
            title:"CSS"
        },
        {
            id:3,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            style:"shadow-yellow-500",
            title:"JavaScript"
        },
        {
            id:4,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            style:"shadow-orange-500",
            title:"React"
        },
        {
            id:5,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            title:"Tailwind",
            style:"shadow-sky-400"
        },
        {
            id:6,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            title:"Node JS",
            style:"shadow-white"
        },
        {
            id:7,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            title:"GraphQL",
            style:"shadow-pink-500"
        },
        {
            id:8,
            src:"https://w7.pngwing.com/pngs/840/443/png-transparent-html-5-logo-web-development-html-css3-canvas-element-web-design-w3c-html5-logo-miscellaneous-text-orange-thumbnail.png",
            title:"GitHub",
            style:"shadow-gray-400"
        },
    ]

    // return <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-full py-20">
    //         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    //             <div className="pb-2">
    //                 <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
    //                 <p className="py-6">These are technologies I've worked with</p>
    //             </div>
    //             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-5 text-center">
    //                 {
    //                     image.map(({id,src,title,style})=>
    //                     <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
    //                     <img src={src} alt="" className="w-20 mx-auto"/>
    //                     <p className="mt-4">{title}</p>
    //                 </div>)
    //                 }
    //             </div>
    //         </div>
    // </div>
// return(
//     <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen">
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//             <div className="pb-8">
//                 <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
//                 <p className="py-6">Check out some of my Projects right here</p>
//             </div>
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ">
//             {
//                 images.map(({id,src})=>
//                 <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//                     <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
//                     <div className="flex items-center justify-center" >
//                         <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
//                         <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
//                     </div>
//                 </div>
//                 )
//             }
//              </div>
//         </div>
//     </div>
return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {image.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Experience
