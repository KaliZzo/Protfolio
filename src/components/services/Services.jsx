import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personalized Branding</h2>
          <br />
          <p>
          Offer personalized branding services that include logo design, brand identity development, 
          and custom marketing materials. Use AI-driven tools to create unique, professional-grade designs 
          tailored to each client's needs, ensuring they stand out in their market.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI-Driven Market Analysis</h2>
          <br />
          <p>
          Develop a SaaS platform that uses AI to analyze market trends, consumer behavior, 
          and competitor strategies. Provide businesses with actionable insights
           and predictive analytics to help them make informed decisions and stay ahead of the competition.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Interactive E-Learning Platform</h2>
          <br />
          <p>
          Create an interactive e-learning platform for professional development,
           featuring gamified courses, real-time collaboration tools, and personalized learning paths. Include features such as virtual classrooms, 
          quizzes, and progress tracking to enhance the learning experience.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sustainable E-Commerce Store</h2>
          <p>
          Launch an e-commerce store that focuses on eco-friendly and sustainable products.
           Offer a wide range of items from reusable household goods to ethically sourced clothing. 
           Implement features like carbon footprint tracking and
           eco-friendly packaging options to attract environmentally conscious consumers.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
