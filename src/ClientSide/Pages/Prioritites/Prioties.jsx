import person from '../../../assets/images/priorities/person.png'
import SubFooter from '../../Shared/SubFooter';
import './Priorities.css'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from "react";
import PriotiesHero from './PriotiesHero';


// eslint-disable-next-line react/prop-types
const Priorities = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div >
            <PriotiesHero></PriotiesHero>

            <div className='main-div mb-[250px]  px-[150px]'>
                <div className='priority-div flex'>
                    <div className='disane-image-div'>
                        <img className='disane-image w-[626px] h-[890px] object-cover' src={person} alt="" />
                    </div>
                    {/* accordian */}
                    <div className='accordion-div w-[898px] ml-[96px]'>
                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary

                                    sx={{
                                        backgroundColor: '#12225D',
                                        paddingLeft: 0,
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"



                                >
                                    <Typography className='accordion-title text-white' sx={{
                                        fontSize: '30px',
                                        fontWeight: {
                                            xs: 700
                                        },
                                        marginLeft: '50px', flexShrink: 0
                                    }}>
                                        Affordable Housing
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12,
                                            xl: 25
                                        },
                                        width: {
                                            xs: 295,
                                            xl: 848
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Housing is not just a commodity; it is a fundamental human right that lies at the core of a healthy and secure life, offering stability, dignity, and a profound sense of belonging.

                                        As someone who has experienced displacement as a refugee, I know too well the importance of stable housing.

                                        Whether we rent or own our homes, the importance of a secure and affordable place to live cannot be overstated. It is the foundation upon which we build our lives, raise our families, and actively contribute to our community.

                                        Despite the historic $1 billion investment spanning the entire housing spectrum, the largest appropriation in the state's history, many families in our community encounter significant hurdles in securing housing that aligns with their needs, budget, facilitates equity-building through homeownership, and fosters a strong sense of safety.

                                        As your State Representative, I will:

                                        • Advocate for an increase in state bonding dollars to augment the overall housing investment across the state.

                                        • Collaborate with renters to ensure equitable treatment by landlords and enforce existing legal protections.

                                        • Foster more public-private partnerships to facilitate the development of additional affordable housing, coupled with the implementation of new rent control measures in Saint Cloud.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className='text-white accordion-title' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>Invest in Education</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Every child, regardless of their zip code, deserves access to the best education in the world. This
                                        necessitates a substantial investment in our K-12 education system to ensure that every child in
                                        Minnesota is equipped with the knowledge and skills required for the contemporary world.
                                        Our schools are currently underfunded, our teachers lack the necessary investment, and,
                                        unfortunately, our children are bearing the brunt of these deficiencies.
                                        As your state representative, my commitment to education includes:
                                        • Advocating for the full funding of public education in Minnesota.
                                        • Increasing funding specifically dedicated to early childhood education, including the
                                        provision of need-based subsidies for childcare and transportation.
                                        • Championing community-based and culturally competent educational programs
                                        designed for children of all ages.
                                        • Advocating for the establishment of full-service community schools that
                                        comprehensively support students and their families, both inside and outside the
                                        classroom.
                                        • Investing in the professional development and well-being of our educators.
                                        • Supporting the "Grow Your Own" initiative, aiming to increase the number of educators
                                        from diverse backgrounds to better reflect the increasingly diverse student population.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Early Childhood Education
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        // fontSize: '25px',
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        },

                                        fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Education is a journey that begins at birth, not just when a child enters kindergarten. Every
                                        child in Minnesota deserves a solid foundation for a successful life. We must start investing in
                                        our children early on and in various community and learning settings.
                                        The childcare industry has been historically underfunded, despite being the initial step in our
                                        children's educational journey and a crucial support for our workforce and overall economic
                                        health. The lack of safe, quality, and affordable childcare options places undue pressure on
                                        residents, often forcing them to make difficult choices, such as staying at home or relocating.
                                        As your legislator, I will support:
                                        • Expand eligibility criteria for childcare assistance program.
                                        • Foster childcare provider startups.
                                        • Use data to inform early childhood policy decisions
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', flexShrink: 0 }}>
                                        Supporting Small Businesses
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Our economy is facing significant challenges that directly impact each and every one of us. The
                                        high costs of living have burdened our community. Inflation has further exacerbated the
                                        challenges. Rising prices for essential goods and services have put a strain on household
                                        budgets, making it even more challenging for families to make ends meet.
                                        Our small businesses, the backbone of our economy, are struggling. They face numerous
                                        hurdles, from limited resources to complex, and oftentimes unnecessary regulations.
                                        As a small business owner who has chosen to raise my family here, I understand firsthand the
                                        vital role that small businesses play in our community. They not only provide essential jobs that
                                        sustain households but also contribute to housing and overall economic stability for families.
                                        As your legislator, I will:
                                        • Support investments in the St. Cloud Downtown Revitalization project to enhance and
                                        benefit our entire region.
                                        • Advocate for workers' rights, ensuring they experience safe, secure, and fair working
                                        conditions.
                                        • Work to secure additional investments for our small businesses, which serve as critical
                                        economic engines, ensuring they have the support needed to rebuild and thrive.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Climate Justice
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Climate change is real, and it is an existential threat to our planet and humanity. It affects us
                                        all.
                                        And for our state, it is threatening the very core of our identity: Farmers are grappling with
                                        increased challenges in supplying our food, the aging electrical grid is strained by extreme heat,
                                        and our winters have become more challenging with prolonged sub-zero cold snaps.
                                        Minnesota is already a leader when it comes to being a leader on climate change, and we
                                        need to ensure we continue to champion progressive climate actions.
                                        As your legislator, I will:
                                        • Advocate implementing strategies to significantly reduce carbon emissions, contributing
                                        to the global effort to combat climate change.
                                        • Promote the growth of green energy sources such as wind, solar, biomass, and other
                                        sustainable alternatives to diversify our energy portfolio and decrease reliance on
                                        traditional fossil fuels.
                                        • Pushed for increase investment in state and local infrastructure for waste management
                                        and drinking water, ensuring that our communities have robust systems capable of
                                        withstanding the challenges posed by climate change.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel6bh-content"
                                    id="panel6bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Healthcare
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        All Minnesotans deserve access to quality, affordable healthcare services to support their
                                        physical and mental well-being. And in doing so, we shouldn’t go bankrupt or sacrifice our
                                        family’s safety net to buy a life-saving prescriptions.
                                        Yet so many in our state are uninsured.
                                        It is imperative that individuals are not forced to forego necessary medical assistance due to
                                        financial constraints.
                                        As your legislator, I will:
                                        • Advocate the expansion of MinnesotaCare.
                                        • Negotiate for reduced pharmaceutical prices to make life-saving medications more
                                        accessible.
                                        • Work diligently to eliminate racial, sexual, and gender-based discrimination within the
                                        healthcare system.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px', marginBottom: '25px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel7bh-content"
                                    id="panel7bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Reproductive Rights
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Women should have the autonomy to make personal decisions about their reproductive health,
                                        guided by their own beliefs, values, and circumstances. It is essential to uphold and protect the
                                        right to make choices without undue interference, ensuring that women have the freedom to
                                        make decisions that are best for their well-being.
                                        As your legislator, I will:
                                        • Utilize my legislative influence to safeguard and uphold a woman's right to make choices
                                        regarding her reproductive health.
                                        • Advocate for legislation that empowers women, allowing them to make well-informed
                                        and safe decisions about their health.
                                        • Champion unbiased and comprehensive sex education in schools, ensuring ageappropriate information that equips our children to make informed choices about
                                        sexual activity.
                                        • Guarantee access to medical care for women, irrespective of the decision they make
                                        regarding a pregnancy.
                                        • Acknowledge and respect the autonomy of women, trusting them to make the choices
                                        that align with their individual circumstances and well-being.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    sx={{
                                        backgroundColor: '#12225D',
                                        width: {
                                            xs: 310,
                                            sm: 200,
                                            md: 300,
                                            lg: 620,
                                            xl: 898
                                        },
                                        height: '136px'
                                    }}
                                    expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#B6BACD', width: '54px', height: '54px', color: '#12225D', borderRadius: '50%' }} />}
                                    aria-controls="panel8bh-content"
                                    id="panel8bh-header"
                                >
                                    <Typography className='accordion-title text-white' sx={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '50px', flexShrink: 0 }}>
                                        Public Safety
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 12
                                        },
                                        width: {
                                            xs: 295
                                        }, fontFamily: 'poppins', fontWeight: '400', color: '#959595'
                                    }} className='accordion-description'>
                                        Everyone in our community deserves to feel safe. As someone who grew up a troubled part of
                                        the world, I understand the high price of an unsafe community, and it is crucial to preserve and
                                        protect that sense of safety at all costs.
                                        As a supporter of the Second Amendment, I believe that law-abiding citizens should have access
                                        to firearms for self-defense and sporting purposes.
                                        I also believe that we must take steps to ensure the safety of our communities, schools, and
                                        citizens from gun violence.
                                        Likewise, I am an advocate for supporting our public safety personnel, including law
                                        enforcement. My commitment to this cause is demonstrated through my involvement as a
                                        member and signatory of the St Cloud Community Policing Agreement. This initiative has
                                        successfully fostered closer collaboration between law enforcement and the diverse
                                        communities they serve, ensuring effective protection for all
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>

            </div>
            <SubFooter></SubFooter>



        </div >
    );
};

export default Priorities;