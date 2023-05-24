import Navbar from "./Navbar";
import './About.css'
import l9hwia from '/l9hwia.png'
import { motion } from "framer-motion";


export default function About() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    };
  
    const textVariants = {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
    };
  
    const imageVariants = {
      hidden: { scale: 0 },
      visible: { scale: 1, transition: { duration: 0.5, delay: 0.4 } },
    };
  
    return (
      <div>
        <Navbar />
        <motion.div
          className="abouit"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className="itifa9ia" variants={textVariants}>
            Meet our team of professionals
          </motion.h3>
          <motion.img
            src={l9hwia}
            className="l9hwia"
            variants={imageVariants}
          />
          <motion.p className="gww9" variants={textVariants}>
            Welcome to our book store! We are a passionate team of three students who share a deep love for literature and the written
            word. Our journey began as friends with a common dream: to create a space where fellow book enthusiasts can explore and
            discover captivating stories. With a blend of our individual strengths and a shared vision, we strive to curate a diverse
            collection of books that cater to every taste and interest. Whether you're seeking thrilling adventures, thought-provoking
            classics, or heartwarming tales, we have carefully handpicked each title to ensure a remarkable reading experience. Join us
            on this literary adventure as we celebrate the magic of books and foster a community that cherishes the beauty of storytelling.
          </motion.p>
        </motion.div>
      </div>
    );
  }
  