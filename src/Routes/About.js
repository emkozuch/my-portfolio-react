import React from 'react'
import SVG from 'react-inlinesvg'
import '../Styles/Routes/About.scss'
import userIcon from '../images/icons/user.svg'
import SkillCard from '../Components/SkillCard'
import js from '../images/skills/js.svg'
import css from '../images/skills/css.svg'
import html from '../images/skills/html.svg'
import inkscape from '../images/skills/inkscape.svg'
import photoshop from '../images/skills/photoshop.svg'
import react from '../images/skills/react.svg'
import redux from '../images/skills/redux.svg'
import sass from '../images/skills/sass.svg'
import git from '../images/skills/git.svg'
import RouteTitle from '../Components/RouteTitle'
import RouteContainer from '../Components/RouteContainer'
import SectionTitle from '../Components/SectionTitle'

function About() {
    return (
        <RouteContainer>
            <RouteTitle src={userIcon} title="O mnie." />
            <div className="about-info-container">
                <h3>Junior Front-end Developer</h3>
                <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
            </div>
            <div className="skills-section-container">
                <SectionTitle title="Umiejętności"/>
                <div className="skills-container">
                    <div className="skill-level-container">
                        <div className="level-title">
                            <h4>Dobra Znajomość</h4>
                        </div>
                        <div className="skills">
                            <SkillCard src={js} title="JavaScript" />
                            <SkillCard src={css} title="CSS3" />
                            <SkillCard src={html} title="HTML5" />
                            <SkillCard src={sass} title="Sass" />
                        </div>
                    </div>
                    <div className="skill-level-container">
                        <div className="level-title">
                            <h4>Średnia Znajomość</h4>
                        </div>
                        <div className="skills">
                            <SkillCard src={react} title="ReactJs" />
                            <SkillCard src={redux} title="Redux" />
                            <SkillCard src={git} title="Git" />
                        </div>
                    </div >
                    <div className="skill-level-container">
                        <div className="level-title">
                            <h4>Podstawowa Znajomość</h4>
                        </div>
                        <div className="skills">
                            <SkillCard src={photoshop} title="Photoshop" />
                            <SkillCard src={inkscape} title="Inkscape" />
                        </div>
                    </div>
                </div>
            </div>
        </RouteContainer>
    )
}

export default About
