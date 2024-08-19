import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import { AboutPage, WithContext } from 'schema-dts'
import { baseUrl, siteConfig } from '@/lib/constants'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: `About Us of the `,
    description: `This is the About Page of the site ${siteConfig.name}, Let's understand us better`
}


const page = () => {

    const jsonLd: WithContext<AboutPage> = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        headline: 'About Us',
        datePublished: '2024-08-017',
        dateModified: '2024-08-017',
        author: {
            '@type': 'Person',
            name: 'Abdus Samad',
        },
        description: 'This is the About Page .',
        image: {
            '@type': 'ImageObject',
            url: `${baseUrl}/og`,
            caption: 'Image caption.',
        },
    }



    return (
        <div className='mb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h2 className='font-bold text-xl capitalize mb-2'>About Us</h2>
                    <BackButton />
                </Container>
            </div>
            <Container>
                <div className=''>
                    <div className='prose'>
                        <h2>About Us</h2>
                        <p>
                            Welcome to Daily Mini Blog, a platform dedicated to sharing knowledge and fostering a community of continuous learners. My name is Abdus Samad, and I created this website with a simple yet powerful vision: to make knowledge accessible and inspire others to explore, learn, and grow.
                        </p>

                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide valuable insights, tutorials, and resources that help individuals expand their understanding of various topics. We believe that sharing knowledge not only empowers others but also contributes to a more informed and connected world.
                        </p>

                        <h2>Why We Share</h2>
                        <p>
                            Knowledge is a gift meant to be shared. This website is a reflection of my journey in the tech industry, where I’ve learned that the more we share, the more we grow. By offering what I’ve learned through years of experience, I hope to spark curiosity, encourage exploration, and support your personal and professional development.
                        </p>

                        <h2>What You’ll Find Here</h2>
                        <ul>
                            <li><strong>Tutorials</strong>: Step-by-step guides on various tech topics, designed to help you learn and apply new skills.</li>
                            <li><strong>Insights</strong>: Articles that dive deep into industry trends, best practices, and innovative ideas.</li>
                            <li><strong>Resources</strong>: Curated tools, frameworks, and references that can assist you in your projects.</li>
                        </ul>

                        <h2>Join Our Community</h2>
                        <p>
                            I invite you to join our community of learners, where knowledge is freely exchanged and growth is celebrated. Whether you’re a seasoned professional or just starting out, there’s something here for everyone.
                        </p>
                        <p>
                            Feel free to reach out if you have any questions, suggestions, or if you just want to connect. I’d love to hear from you at <a href="mailto:samadmalik04@gmail.com">samadmalik04@gmail.com</a>.
                        </p>

                        <blockquote className='bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote'>
                            <h3>Note</h3>
                            <p>
                                Thank you for visiting Daily Mini Blog. Together, let’s keep the spirit of learning alive!
                            </p>
                        </blockquote>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page