import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Raiyan</h1>
            <h2>My Online Portfolio</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          Hello! My Name is Shad Ahmed Raiyan. I am a University Student currenly learning a few things about Github!
          This webpage is still under construction. I am still learning how to use Github and how to make a webpage. I am
          going to make this my go-to online CV and portfolio. I am going to add all my projects and experiences here. I 
          am also going to add a blog section where I will write about my experiences and thoughts. So Stay Tuned!
        </p>
      </FadeIn.Item>
      {/* <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item> */}
      <FadeIn.Item>
        <Posts category="information" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
