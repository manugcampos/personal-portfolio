/* eslint-disable react/no-unescaped-entities */
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I used to work with an old laptop without an SSD a few years ago,
            and the difference when I started using this one was staggering. I
            loved the Apple ecosystem and at work I use the same but 16 inches.
          </Tool>
          <Tool title="Mi Curved Xiami 34">
            A large, curved screen to view all my content and increase my
            productivity.
          </Tool>
          <Tool title="keychron K3 V2">
            I was with a keyboard that I bought in quarantine (which I have
            never changed the batteries) and this year I decided to buy this
            one, I love the feel and I would buy it again with my eyes closed.
          </Tool>
          <Tool title="Apple Magic Mouse">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            It lacks nothing, it is like a good wine, it improves with the
            passing of time and will continue to do so.
          </Tool>
          <Tool title="Warp">
            for me the best terminal out there, simple, beautiful and AI
            powered.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Nothing to add that we don't already know about Figma. Excellent for
            mockups and components.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            The best note taker ever created. I accept no discussion. It can be
            a little tricky at first but once you get the hang of it there is no
            turning back.
          </Tool>

          <Tool title="AltTab">
            the native mac window switching application leaves much to be
            desired. This is a great extension that makes it easy for me to move
            between open apps as if it were windows.
          </Tool>
          <Tool title="Pomodoro Timer">
            When I have a heavy workload I break it down into small tasks by
            time. It always works and makes me productive.
          </Tool>
          <Tool title="Rectangle">
            Windows manager for Macos. I don't know how they haven't introduced
            it natively into the system yet.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
