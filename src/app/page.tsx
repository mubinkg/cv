'use client'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Font, PDFDownloadLink } from "@react-pdf/renderer"

// Register fonts
Font.register({
  family: "Open Sans",
  fonts: [
    { src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf" },
    { src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf", fontWeight: 600 },
    { src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf", fontWeight: 700 },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 2,
  },
  contactItem: {
    marginRight: 15,
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingBottom: 2,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  company: {
    fontSize: 11,
    fontWeight: 600,
  },
  jobPeriod: {
    fontSize: 10,
    marginBottom: 2,
  },
  jobLocation: {
    fontSize: 10,
    marginBottom: 5,
  },
  jobDescription: {
    marginBottom: 15,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  columns: {
    flexDirection: "row",
    marginTop: 10,
  },
  leftColumn: {
    flex: 2,
    paddingRight: 15,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
  },
  education: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 600,
  },
  school: {
    fontSize: 10,
    marginBottom: 2,
  },
  period: {
    fontSize: 10,
    marginBottom: 2,
  },
  location: {
    fontSize: 10,
  },
  skillsContainer: {
    marginBottom: 15,
  },
  skillItem: {
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
    marginBottom: 2,
  },
  projectLink: {
    fontSize: 9,
    color: "#0066cc",
    marginBottom: 3,
    textDecoration: "underline",
  },
  projectDescription: {
    marginBottom: 2,
  },
  projectTech: {
    fontStyle: "italic",
  },
})

const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>MUBIN MOHAMMAD IKHTIAR KHAN</Text>
          <Text style={styles.title}>Full-Stack Developer</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>Email: mubin.ice.ru@gmail.com</Text>
            <Text style={styles.contactItem}>Phone: +8801790186490</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>Address: West Manikdi, Dhaka Cantonment, Dhaka, Bangladesh</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>LinkedIn: linkedin.com/in/mubin-ice-ru/</Text>
            <Text style={styles.contactItem}>Github: github.com/mubinkg</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Image src="/placeholder.svg?height=100&width=100" />
        </View>
      </View>

      <View style={styles.columns}>
        <View style={styles.leftColumn}>
          {/* Work Experience Section */}
          <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>

          {/* Job 1 */}
          <View style={styles.jobDescription}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text style={styles.company}>Upay (Ucb Fintech Company Ltd.)</Text>
            <Text style={styles.jobPeriod}>November 2023 - current</Text>
            <Text style={styles.jobLocation}>Gulshan-1, Dhaka</Text>

            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Working on multiple financial portals and backoffice systems(Uclick, Uclick Backoffice, Finance, EKyc,
                B2b, Corporate, Automation Portal, Payment Gateway etc.)
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                In uclick portals worked with next.js app router, fully typescript support, schaden, tailwindcss and
                tanstack stack
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Implement lazy loading, server actions, partial pre-rendering, and static generation to improve
                performance and reduce bundle size.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Also consider on reduce roundtrip time and improve user experience. Implement prefetching and streaming
                for complex dashboards.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Add authentication with jwt, role based access control, and refresh token.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Implemnt some security policy like xss, clickjacking, csrf, etc.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                All other portals are developed in react.js with JavaScript, redux, sagas.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Here i improved code quality and fixing bugs also improve performance of the code by using memoization
                and caching.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Build docker imgae for all portals and help to deploy on kubernetes cluster with devops team.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Worked in corporate, b2b backend using django rest framework and postgresql.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Implement corporate salary in bulk for thoused of people at time using celery.
              </Text>
            </View>
          </View>

          {/* Job 2 */}
          <View style={styles.jobDescription}>
            <Text style={styles.jobTitle}>Full-Stack Developer(MERN)</Text>
            <Text style={styles.company}>Fanfare Bangladesh Ltd.</Text>
            <Text style={styles.jobPeriod}>June 2022 - Oct 2023</Text>
            <Text style={styles.jobLocation}>Nashville, TN</Text>

            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Develope admin panel for controlling ecommerce part of Fanfare applicaion.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Work with next.js 12 and implement staic genration, revalidation and server side randering using server
                funcion.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Worked with material ui for desing part and react-hook-form for form handling.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Implement authentication with jwt and role based access control.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Implement redux toolkit for state management and apollo client for graphql api data fetching.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Using nest.js and graphql with apollo server for backend api.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>For database used mongodb and for ORM used mongoose.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Optimized query performance by using complex aggregate and indexing.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Implement multiprocessing using node cluster module and helped to deploy on aws using pm2 for multiple
                instance.
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Add firebase realtime database for circkert score and prediction game. Also implemnt fcm for
                notification.
              </Text>
            </View>
          </View>

          {/* Projects Section */}
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          <View style={styles.jobDescription}>
            <Text style={styles.projectTitle}>ZimbaCash - A microfinance system</Text>
            <Text style={styles.projectLink}>https://www.zimbacash.com/</Text>
            <Text style={styles.projectDescription}>
              ZimbaCash is a microfinance system that allows users take loan and pay them using multiple payment
              options.
            </Text>
            <Text style={styles.projectTech}>Technologies used: typescript, next.js, nest.js, mongodb.</Text>
          </View>
        </View>

        <View style={styles.rightColumn}>
          {/* Education Section */}
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.education}>
            <Text style={styles.degree}>B.Sc. Information and Communication Engineering</Text>
            <Text style={styles.school}>University of Rajshahi</Text>
            <Text style={styles.period}>Jan 2017 - Mar 2020</Text>
            <Text style={styles.location}>Rajshahi, Bangladesh</Text>
          </View>

          {/* Skills Section */}
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillItem}>
              <Text>HTML CSS</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>JavaScript TypeScript</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>React.js Next.js</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>Node.js</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>Nest.js</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>GraphQL Django</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>MongoDB PostgreSQL</Text>
            </View>
            <View style={styles.skillItem}>
              <Text>Docker Scrum/Agile</Text>
            </View>
          </View>

          {/* Other Skills Section */}
          <Text style={styles.sectionTitle}>OTHER SKILLS</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Solved 500+ problems</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Joinde multiple programming contest.</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>
                Get 1st at intra dep contenst and 3rd on rajshahi divisional contentst.
              </Text>
            </View>
          </View>

          {/* Online Judge Links */}
          <Text style={styles.sectionTitle}>ONLINE JUDGE LINKS</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Codeforces: https://codeforces.com/profile/mubin_IC</Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>Leetcode: https://leetcode.com/u/mubin221998/</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default function page() {
  return (
    <div className='flex'>
      <PDFViewer className='w-[50vw] h-[100vh]'>
        < ResumeDocument />
      </PDFViewer>
      <div>
        <PDFDownloadLink document={<ResumeDocument />} fileName='my-resume.pdf' >Download</PDFDownloadLink>
      </div>
    </div>
  )
}