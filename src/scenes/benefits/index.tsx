import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Faciities",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lacus ut placerat ultricies, lorem augue malesuada."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Vestibulum eget mauris gravida, porta ex eget, ultrices lorem. Vestibulum posuere tellus at cursus venenatis. Aliquam a lobortis ipsum, sed commodo diam."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus, lacus ut placerat ultricies, lorem augue malesuada."
    },

]

const container ={
    hidden: {},
    visible:{
        transition:{staggerChildre:0.2}
    },
}


type Props = {
    setSelectedPage:(value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText> MORE THAN JUST GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis ultrices nulla quis finibus. Curabitur sed augue mattis,
            consequat ante vel, congue est. Sed volutpat dignissim mattis.
            Curabitur feugiat ultricies sem non.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay:0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </motion.div>
            {/* DESCRIPT */}
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vitae venenatis dui, ac tincidunt libero. Aliquam convallis
                risus quis tempus lobortis. Aenean nec enim non nibh congue
                rutrum. Cras venenatis nulla at venenatis mollis. Maecenas
                tincidunt dictum dolor eget pellentesque. Aenean non elit enim.
              </p>
              <p className="mb-5">
                Proin et neque metus. Donec scelerisque nisl lorem. Ut id
                molestie tellus, quis scelerisque est. Etiam vehicula ultricies
                nisl, rhoncus elementum metus. Cras ligula sapien, dictum ac
                neque sit amet.
              </p>
            </div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits