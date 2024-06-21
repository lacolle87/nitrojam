import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import HeaderComponent from "./sections/headercomponent.jsx";
import BannerComponent from "./sections/bannercomponent.jsx";
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import FeatureComponent from "./sections/featurecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PricingComponent from "./sections/pricingcomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";
import C2aComponent from "./sections/c2acomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"


import Buttons from "../components/sections/buttons.jsx";
import Labels from "../components/sections/labels.jsx";
import PagePagination from "../components/sections/pagination.jsx";
import Images from "../components/sections/images.jsx";
import Breadcrumbs from "../components/sections/breadcrumbs.jsx";
import Cards from "../components/sections/cards.jsx";
import Dropdowns from "../components/sections/dropdowns.jsx";
import PageForm from "../components/sections/form.jsx";
import PageTable from "../components/sections/table.jsx";
import Notification from "../components/sections/notification.jsx";
import TooltipPopover from "../components/sections/tooltip-popover.jsx";
import Typography from "../components/sections/typography.jsx";
import JsComponents from "../components/sections/js-components.jsx";

const CustomComponents = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <HeaderComponent />
                    <BannerComponent />
                    <FormBannerComponent />
                    <FeatureComponent />
                    <PortfolioComponent />
                    <PricingComponent />
                    <TeamComponent />
                    <TestimonialComponent />
                    <BlogComponent />
                    <C2aComponent />
                    <ContactComponent />
                    <CallToAction />
                    <Buttons />
                    <Labels />
                    <PagePagination />
                    <Images />
                    <Breadcrumbs />
                    <Cards />
                    <Dropdowns />
                    <PageForm />
                    <PageTable />
                    <Notification />
                    <TooltipPopover />
                    <Typography />
                    <JsComponents />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;
