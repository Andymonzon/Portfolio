import "./ScrollItem.css";
import { motion } from "framer-motion";

function ScrollItem({scrollYProgress}) {

  return (
    <section className="scroll-circle">
      <div>
        <figure className="progress">
          <svg id="progress" width="40" height="83" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="0" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="0"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export {ScrollItem}