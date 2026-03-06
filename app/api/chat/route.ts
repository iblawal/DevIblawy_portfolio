import { NextRequest, NextResponse } from 'next/server'
import { retrieveProject, getProjectSummary } from '@/lib/retrieveProject'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const userMessage = body.message
    const conversationHistory = body.conversationHistory

    const API_KEY = process.env.GEMINI_API_KEY

    if (!API_KEY) {
      return NextResponse.json({
        response: "AI temporarily offline. Email Ibrahim: ibrahimlawal060@gmail.com",
      })
    }

    // Smart project retrieval
    const relevantProject = retrieveProject(userMessage)
    const projectContext = getProjectSummary(relevantProject)

    // Build conversation for Gemini
    const messages = []
    
    if (conversationHistory && conversationHistory.length > 0) {
      conversationHistory.forEach((msg: any) => {
        if (msg.role === 'user') {
          messages.push({ role: 'user', parts: [{ text: msg.content }] })
        } else if (msg.role === 'assistant') {
          messages.push({ role: 'model', parts: [{ text: msg.content }] })
        }
      })
    }

    messages.push({ role: 'user', parts: [{ text: userMessage }] })

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{
              text: `You are Ibrahim Lawal Mayowa's AI portfolio assistant.

ABOUT IBRAHIM:
- Full-Stack Developer, 2+ years experience
- Lead Web Developer at EB Behavioral Health (September 2024 - Present)
- Coding Facilitator at ByteTech Academy & Haven Edu (trained 100+ students)
- Skills: React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, WordPress
- Email: ibrahimlawal060@gmail.com
- Portfolio: dev-iblawy.com
- Location: Lagos, Nigeria (Remote-ready, timezone flexible)
- Available for hire (Full-time, Freelance, Contract)

ALL PROJECTS:
1. **Learn & Connect** - Full-stack e-learning platform (React, TypeScript, Next.js, MongoDB, Express, Node.js)
2. **ML Luxury** - E-commerce fashion brand (React, Next.js, Tailwind CSS)
3. **EB Behavioral Health** - Healthcare website with forms and referrals (WordPress, HTML, CSS, JavaScript)
4. **Elegant by Bee** - Event planning website with booking (React, Next.js, Tailwind CSS)

MOST RELEVANT PROJECT FOR THIS QUESTION:
${projectContext}

TEACHING EXPERIENCE:
- 100+ students trained in web development
- Scratch, PictoBlox, HTML, CSS, JavaScript instruction
- Curriculum design and bootcamp delivery
- Both virtual and physical classes

RESPONSE RULES:
1. Keep responses 2-3 sentences maximum (unless asked for detail)
2. Sound professional but friendly
3. ALWAYS end with call-to-action (email, view project, ask more)
4. When mentioning projects, use the MOST RELEVANT project above
5. Include live link when discussing projects
6. If asked about experience → mention EB Behavioral + teaching
7. If asked about frontend → suggest ML Luxury or Elegant by Bee
8. If asked about full-stack → highlight Learn & Connect with tech stack
9. If asked about WordPress → mention EB Behavioral Health
10. If asked about teaching → mention 100+ students, Scratch/PictoBlox
11. If asked about availability → say "Available for hire" + email
12. Don't make up information - only use facts provided
13. If unsure → direct to email: ibrahimlawal060@gmail.com

EXAMPLE RESPONSES:
Q: "What's your experience?"
A: "Ibrahim has 2+ years as a Full-Stack Developer, currently Lead at EB Behavioral Health. He's also trained 100+ students as a Coding Facilitator. Want to know about specific projects or his tech stack?"

Q: "Are you available?"
A: "Yes! Ibrahim is available for full-time, freelance, and contract roles (remote-ready). Email him at ibrahimlawal060@gmail.com to discuss opportunities."

Q: "Show me your best project"
A: "Learn & Connect is a full-stack e-learning platform built with React, TypeScript, Next.js, MongoDB, and Express. It features authentication, dashboards, and course management. Check it out: https://my-app-rose-six.vercel.app"

Q: "Do you do e-commerce?"
A: "Yes! Check out ML Luxury - a modern e-commerce fashion landing page: https://ml-luxury-l967.vercel.app. Ibrahim specializes in responsive UI and great user experience."

GOAL: Get visitors to email Ibrahim or explore his projects. Be helpful, concise, and conversion-focused.`
            }]
          },
          contents: messages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 350,
          },
        }),
      }
    )

    const data = await response.json()
    const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm Ibrahim's AI assistant! Ask about his experience, skills, projects, or availability."

    return NextResponse.json({ response: aiResponse })

  } catch (error) {
    console.error('Gemini API Error:', error)
    
    // Enhanced fallback with project retrieval
    try {
      const body = await req.json()
      const userMessage = body.message || ''
      const msg = userMessage.toLowerCase()
      
      const relevantProject = retrieveProject(userMessage)
      
      let response = "I'm here to help! Ask about Ibrahim's experience, skills, or projects. Email: ibrahimlawal060@gmail.com"

      if (msg.includes('experience') || msg.includes('work') || msg.includes('background')) {
        response = "Ibrahim has 3+ years as a Full-Stack Developer (Lead at EB Behavioral Health) and trained 100+ students as a Coding Facilitator. Email: ibrahimlawal060@gmail.com"
      } 
      else if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack')) {
        response = "React, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, WordPress. View projects at dev-iblawy.com!"
      } 
      else if (msg.includes('available') || msg.includes('hire') || msg.includes('job')) {
        response = "Yes! Ibrahim is available for hire (full-time, freelance, contract). Email: ibrahimlawal060@gmail.com"
      } 
      else if (msg.includes('project') || msg.includes('portfolio') || msg.includes('best') || msg.includes('show')) {
        response = `Check out ${relevantProject.title}: ${relevantProject.description} Built with ${relevantProject.stack.join(', ')}. View: ${relevantProject.link}`
      } 
      else if (msg.includes('teach') || msg.includes('instructor') || msg.includes('mentor') || msg.includes('student')) {
        response = "Ibrahim has trained 100+ students in web development (Scratch, PictoBlox, HTML, CSS, JS). He designs curricula and delivers bootcamps. Email: ibrahimlawal060@gmail.com"
      } 
      else if (msg.includes('contact') || msg.includes('email') || msg.includes('reach')) {
        response = "Email Ibrahim at ibrahimlawal060@gmail.com or download his CV from the portfolio at dev-iblawy.com!"
      }
      else if (msg.includes('fullstack') || msg.includes('full stack') || msg.includes('backend')) {
        response = "Ibrahim builds full-stack apps with React, Next.js, Node.js, MongoDB. Check out Learn & Connect (e-learning platform): https://my-app-rose-six.vercel.app"
      }
      else if (msg.includes('frontend') || msg.includes('ui') || msg.includes('design')) {
        response = "Ibrahim specializes in modern React/Next.js frontends. See ML Luxury (e-commerce): https://ml-luxury-l967.vercel.app or Elegant by Bee (event planning): https://elegantebybee-81.vercel.app"
      }
      else if (msg.includes('wordpress') || msg.includes('cms')) {
        response = "Ibrahim builds custom WordPress sites. Live example: EB Behavioral Health (healthcare): https://www.ebbehavioralhealth.com"
      }

      return NextResponse.json({ response })
    } catch (fallbackError) {
      return NextResponse.json({
        response: "Something went wrong. Please email Ibrahim directly at ibrahimlawal060@gmail.com"
      })
    }
  }
}