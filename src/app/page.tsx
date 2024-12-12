import Image from 'next/image'

export default function Resume() {
  return (
    <div className="bg-white text-gray-800 max-w-[215mm] px-[5mm] mx-auto font-sans">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h1 className="text-xl uppercase font-bold">MUBIN MOHAMMAD IKHTIAR KHAN</h1>
          <p className="text-blue-600 text-sm font-semibold">Software Engineer</p>
          <div className="flex items-center mt-2 text-sm">
            <span className="mr-4">📞 01790186490</span>
            <span className="mr-4">📧 mubin.ice.ru@gmail.com</span>
          </div>
          <div className="flex items-center mt-1 text-sm">
            <span className="mr-4">🔗 linkedin.com/mubin.ice.ru</span>
            <span>📍 Dhaka Cantonment, Dhaka</span>
          </div>
        </div>
        <Image
          src="/user.png"
          alt="Ava Johnson"
          width={70}
          height={40}
          className='rounded-md'
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <section className="mb-6">
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">SUMMARY</h2>
            <p className="text-sm">
              With over 9 years of experience in software engineering, I bring to the table a
              deep understanding of cloud computing, operating systems, and data
              structures. My technical expertise includes hands-on experience with AWS,
              Azure, and Google Cloud. The highlight of my career so far has been leading a
              team in developing machine learning solutions to optimize search engine
              algorithms.
            </p>
          </section>
          <section className="mb-3">
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">EXPERIENCE</h2>
            <div className='mb-2'>
              <h3 className="font-bold">Software Engineer</h3>
              <p className="text-sm">Upay | 09/2020 - Continue | Gulshan-1, Dhaka</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Developed a custom Oracle database solution for a finance client, increasing data processing speeds by 40%.</li>
                <li>Engaged in continuous learning initiatives to keep up with the latest in cloud computing trends.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Full Stack Software Developer(MERN)</h3>
              <p className="text-sm">Upay | 09/2020 - Continue | Gulshan-1, Dhaka</p>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Developed a custom Oracle database solution for a finance client, increasing data processing speeds by 40%.</li>
                <li>Engaged in continuous learning initiatives to keep up with the latest in cloud computing trends.</li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <section className="mb-2">
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">PROJECTS</h2>
            <div className="mb-2">
              <h3 className="font-bold text-sm">Open Source Database Contribution</h3>
              <p className="text-xs">Contributed to improving open-source database efficiency, enhancing transaction speeds by 30%.</p>
            </div>
            <div>
              <h3 className="font-bold text-sm">Cloud Service Monitoring Tool</h3>
              <p className="text-xs">Developed a monitoring tool for cloud services to streamline incident response times.</p>
            </div>
          </section>
          <section className="mb-2">
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">COURSES</h2>
            <ul className="list-disc list-inside text-sm">
              <li>Advanced Data Structures and Algorithms</li>
              <li>Certified Cloud Practitioner</li>
            </ul>
          </section>
          <section className="mb-2">
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">EDUCATION</h2>
            <div>
              <h3 className="font-bold text-sm">B.Sc(Eng.) in Information and Communication Engineering</h3>
              <p className="text-xs">University of Rajshahi | 01/2017 - 03/2020</p>
            </div>
          </section>
          <section>
            <h2 className="font-bold border-b-2 border-gray-300 mb-2">PASSIONS</h2>
            <p className="text-sm">Cloud Technology Enthusiast</p>
            <p className="text-xs">Eagerly following and participating in advancements in cloud services and platforms.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

