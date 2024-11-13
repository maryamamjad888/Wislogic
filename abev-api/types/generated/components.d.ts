import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutChooseWislogic extends Schema.Component {
  collectionName: 'components_about_choose_wislogics';
  info: {
    displayName: 'ChooseWislogic';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    Image: Attribute.Media;
  };
}

export interface AboutHomePageTeam extends Schema.Component {
  collectionName: 'components_about_home_page_teams';
  info: {
    displayName: 'HomePageTeam';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Pictures: Attribute.Component<'about.pictures', true>;
  };
}

export interface AboutImages extends Schema.Component {
  collectionName: 'components_about_images';
  info: {
    displayName: 'Images';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface AboutList extends Schema.Component {
  collectionName: 'components_about_lists';
  info: {
    displayName: 'list';
    icon: 'angle-double-right';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface AboutPictures extends Schema.Component {
  collectionName: 'components_about_pictures';
  info: {
    displayName: 'Pictures';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    linkedln: Attribute.Text;
    Name: Attribute.String;
    Title: Attribute.String;
  };
}

export interface AboutTeamImages extends Schema.Component {
  collectionName: 'components_about_team_images';
  info: {
    displayName: 'TeamImages';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Name: Attribute.String;
    Bio: Attribute.String;
  };
}

export interface AboutTeam extends Schema.Component {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    TeamImages: Attribute.Component<'about.team-images', true>;
  };
}

export interface AboutWorldClassDesigners extends Schema.Component {
  collectionName: 'components_about_world_class_designers';
  info: {
    displayName: 'WorldClassDesigners';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Component<'about.images', true>;
    Description: Attribute.Text;
  };
}

export interface BlockMiniBlocks extends Schema.Component {
  collectionName: 'components_block_mini_blocks';
  info: {
    displayName: 'MiniBlocks';
  };
  attributes: {
    Title: Attribute.String;
    Icon: Attribute.Media;
    DetailText: Attribute.Text;
  };
}

export interface CardsCards extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    Title: Attribute.String;
    Type: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface CardsSCards extends Schema.Component {
  collectionName: 'components_cards_s_cards';
  info: {
    displayName: 's cards';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    LeftSideImage: Attribute.Media;
    Section2: Attribute.Component<'service.section2'>;
  };
}

export interface CeoCeo extends Schema.Component {
  collectionName: 'components_ceo_ceos';
  info: {
    displayName: 'CEO';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Blocks;
  };
}

export interface CmsCmsContent extends Schema.Component {
  collectionName: 'components_cms_cms_contents';
  info: {
    displayName: 'CmsContent';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Blocks;
    Icon: Attribute.Media;
  };
}

export interface CmsCmsHeadText extends Schema.Component {
  collectionName: 'components_cms_cms_head_texts';
  info: {
    displayName: 'CmsHeadText';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface CollageCollage extends Schema.Component {
  collectionName: 'components_collage_collages';
  info: {
    displayName: 'collage';
  };
  attributes: {
    GridImages: Attribute.Media;
  };
}

export interface ContactInfoCard extends Schema.Component {
  collectionName: 'components_contact_info_cards';
  info: {
    displayName: 'card';
    icon: 'air-freshener';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    iconClass: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'icon bg1'>;
    infoText1: Attribute.String;
    infoText2: Attribute.String;
  };
}

export interface ContactContactUs extends Schema.Component {
  collectionName: 'components_contact_contact_uses';
  info: {
    displayName: 'Contact Us';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface DetailDetailPageContent extends Schema.Component {
  collectionName: 'components_detail_detail_page_contents';
  info: {
    displayName: 'DetailPageContent';
    icon: 'cube';
  };
  attributes: {};
}

export interface DetailServiceDetailPageContent extends Schema.Component {
  collectionName: 'components_detail_service_detail_page_contents';
  info: {
    displayName: 'ServiceDetailPageContent';
    icon: 'cube';
    description: '';
  };
  attributes: {
    BannerImage: Attribute.Media;
    Section1: Attribute.Component<'section.section1'>;
    Section2: Attribute.Component<'section.section2', true>;
    Section3: Attribute.Component<'section.section3'>;
    Section4: Attribute.Component<'section.section4'>;
    Section2TopContent: Attribute.Component<'section.section2-top-content'>;
    SeoCards: Attribute.Component<'seo.seo-industries-cards', true>;
    SeoIndustriesText: Attribute.Component<'seo.seo-industries-text'>;
    SeoCaseStudies: Attribute.Component<'seo.case-studies-seo', true>;
    SeoCaseStudiesText: Attribute.Component<'seo.seo-case-studies-text'>;
    SocialMediaContent: Attribute.Component<'social.social-media-content'>;
    CardsSection: Attribute.Component<'graphic.graphic-designing-cards', true>;
    CardsSectionTitle: Attribute.Component<'title.cards-section-title'>;
    TextWithImage: Attribute.Component<'text.text-with-image'>;
    EmailMarketingProcess: Attribute.Component<
      'email.email-marketing-process',
      true
    >;
    EmailMarketingProcessHead: Attribute.Component<'email.email-marketing-process-head'>;
    PpcSection: Attribute.Component<'ppc.ppc-section'>;
    CmsContent: Attribute.Component<'cms.cms-content', true>;
    CmsHeadText: Attribute.Component<'cms.cms-head-text'>;
  };
}

export interface EmailEmailMarketingProcessHead extends Schema.Component {
  collectionName: 'components_email_email_marketing_process_heads';
  info: {
    displayName: 'EmailMarketingProcessHead';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface EmailEmailMarketingProcess extends Schema.Component {
  collectionName: 'components_email_email_marketing_processes';
  info: {
    displayName: 'EmailMarketingProcess';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.Text;
    Icon: Attribute.Media;
  };
}

export interface FunFactsCard extends Schema.Component {
  collectionName: 'components_fun_facts_cards';
  info: {
    displayName: 'card';
    icon: 'arrow-circle-right';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    number: Attribute.String & Attribute.Required;
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'flaticon-employee'>;
  };
}

export interface GraphicGraphicDesigningCards extends Schema.Component {
  collectionName: 'components_graphic_graphic_designing_cards';
  info: {
    displayName: 'Graphic Designing Cards';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Media;
  };
}

export interface HeroHeroSection extends Schema.Component {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    BannerImg: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
    ButtonTitle: Attribute.String;
  };
}

export interface HomeHomePageCards extends Schema.Component {
  collectionName: 'components_home_home_page_cards';
  info: {
    displayName: 'HomePageCards';
    icon: 'cube';
    description: '';
  };
  attributes: {
    CardIcon: Attribute.Media;
    CardTitle: Attribute.String;
    CardText: Attribute.Text;
  };
}

export interface ImagesCollage extends Schema.Component {
  collectionName: 'components_images_collages';
  info: {
    displayName: 'Collage';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
  };
}

export interface InfoInformation extends Schema.Component {
  collectionName: 'components_info_information';
  info: {
    displayName: 'Information';
    icon: 'arrowRight';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ListServices extends Schema.Component {
  collectionName: 'components_list_services';
  info: {
    displayName: 'services';
    icon: 'align-right';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'flaticon-draw-check-mark'>;
  };
}

export interface MetaMetaDetails extends Schema.Component {
  collectionName: 'components_meta_meta_details';
  info: {
    displayName: 'MetaDetails';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
  };
}

export interface OverviewListLists extends Schema.Component {
  collectionName: 'components_overview_list_lists';
  info: {
    displayName: 'lists';
    icon: 'arrows-alt-h';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortText: Attribute.Text & Attribute.Required;
  };
}

export interface PartnerPartners extends Schema.Component {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'Partners';
    icon: 'arrowDown';
  };
  attributes: {
    Name: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface PartnersImage extends Schema.Component {
  collectionName: 'components_partners_images';
  info: {
    displayName: 'image';
    icon: 'align-center';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PpcPpcSection extends Schema.Component {
  collectionName: 'components_ppc_ppc_sections';
  info: {
    displayName: 'PpcSection';
    description: '';
  };
  attributes: {
    MainTitle: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
    Title1: Attribute.String;
    Description1: Attribute.Text;
    Title2: Attribute.String;
    Description2: Attribute.Text;
    MainDescription: Attribute.Text;
  };
}

export interface PricingFeaturesFeatures extends Schema.Component {
  collectionName: 'components_pricing_features_features';
  info: {
    displayName: 'features';
    icon: 'angle-right';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    shortText: Attribute.String & Attribute.Required;
    iconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'bx bx-info-circle'>;
  };
}

export interface PricingCard extends Schema.Component {
  collectionName: 'components_pricing_cards';
  info: {
    displayName: 'card';
    icon: 'basketball-ball';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Basic Team'>;
    shortText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Powerful & awesome elements'>;
    price: Attribute.String & Attribute.DefaultTo<'$29'>;
    date: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/month'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Purchage Plan'>;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
    featuresList1: Attribute.String;
    featuresList2: Attribute.String;
    featuresList3: Attribute.String;
    featuresList4: Attribute.String;
    featuresList5: Attribute.String;
    featuresList6: Attribute.String;
  };
}

export interface QuesQuestionAnswers extends Schema.Component {
  collectionName: 'components_ques_question_answers';
  info: {
    displayName: 'QuestionAnswers';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Text;
  };
}

export interface ResultResult extends Schema.Component {
  collectionName: 'components_result_results';
  info: {
    displayName: 'Result';
  };
  attributes: {
    BlockOne: Attribute.RichText;
    BlockTwo: Attribute.RichText;
  };
}

export interface SectionSection1 extends Schema.Component {
  collectionName: 'components_section_section1s';
  info: {
    displayName: 'Section1';
    icon: 'cube';
  };
  attributes: {
    LeftImage: Attribute.Media;
    RightText: Attribute.Blocks;
    ButtonTitle: Attribute.String;
  };
}

export interface SectionSection2TopContent extends Schema.Component {
  collectionName: 'components_section_section2_top_contents';
  info: {
    displayName: 'Section2TopContent';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SectionSection2 extends Schema.Component {
  collectionName: 'components_section_section2s';
  info: {
    displayName: 'Section2';
    icon: 'cube';
    description: '';
  };
  attributes: {
    CardIcon: Attribute.Media;
    CardTitle: Attribute.String;
    CardDescription: Attribute.Blocks;
  };
}

export interface SectionSection3 extends Schema.Component {
  collectionName: 'components_section_section3s';
  info: {
    displayName: 'Section3';
    icon: 'cube';
  };
  attributes: {
    DetailText: Attribute.Blocks;
  };
}

export interface SectionSection4 extends Schema.Component {
  collectionName: 'components_section_section4s';
  info: {
    displayName: 'Section4';
    icon: 'cube';
  };
  attributes: {
    DetailText: Attribute.Blocks;
    ButtonTitle: Attribute.String;
  };
}

export interface SectionSection5 extends Schema.Component {
  collectionName: 'components_section_section5s';
  info: {
    displayName: 'Section5';
    icon: 'cube';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Step1: Attribute.Blocks;
    Step2: Attribute.Blocks;
    Step3: Attribute.Blocks;
    Step4: Attribute.Blocks;
  };
}

export interface SeoCaseStudiesSeo extends Schema.Component {
  collectionName: 'components_seo_case_studies_seo_s';
  info: {
    displayName: 'Case Studies(SEO)';
    description: '';
  };
  attributes: {
    Country: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SeoSeoCaseStudiesText extends Schema.Component {
  collectionName: 'components_seo_seo_case_studies_texts';
  info: {
    displayName: 'Seo Case Studies Text';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SeoSeoIndustriesCards extends Schema.Component {
  collectionName: 'components_seo_seo_industries_cards';
  info: {
    displayName: 'Seo Industries Cards';
  };
  attributes: {
    Title: Attribute.String;
    CardIcon: Attribute.Media;
  };
}

export interface SeoSeoIndustriesText extends Schema.Component {
  collectionName: 'components_seo_seo_industries_texts';
  info: {
    displayName: 'Seo Industries Text';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SeoSeoIndustries extends Schema.Component {
  collectionName: 'components_seo_seo_industries';
  info: {
    displayName: 'SEO Industries';
  };
  attributes: {};
}

export interface ServOurServices extends Schema.Component {
  collectionName: 'components_serv_our_services';
  info: {
    displayName: 'OurServices';
    icon: 'arrowUp';
  };
  attributes: {
    Name: Attribute.String;
    Link: Attribute.String;
  };
}

export interface ServiceSection2 extends Schema.Component {
  collectionName: 'components_service_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {};
}

export interface ServiceService extends Schema.Component {
  collectionName: 'components_service_services';
  info: {
    displayName: 'Service';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    img: Attribute.Media & Attribute.Required;
  };
}

export interface SocialSocialMediaContent extends Schema.Component {
  collectionName: 'components_social_social_media_contents';
  info: {
    displayName: 'SocialMediaContent';
    description: '';
  };
  attributes: {
    TitleOne: Attribute.String;
    DescriptionOne: Attribute.Text;
    Image1: Attribute.Media;
    Title2: Attribute.String;
    Description2: Attribute.Text;
    Image2: Attribute.Media;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'Social';
    icon: 'angle-double-down';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    IconName: Attribute.String & Attribute.Required;
    Link: Attribute.String;
  };
}

export interface SocialsSocialsList extends Schema.Component {
  collectionName: 'components_socials_socials_lists';
  info: {
    displayName: 'socialsList';
    icon: 'arrow-alt-circle-right';
  };
  attributes: {
    IconName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'flaticon-facebook-app-symbol'>;
    link: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://www.facebook.com/'>;
  };
}

export interface SolSloution extends Schema.Component {
  collectionName: 'components_sol_sloutions';
  info: {
    displayName: 'Sloution';
    description: '';
  };
  attributes: {
    FirstBlock: Attribute.RichText;
    SecondBlock: Attribute.RichText;
    ThirdBlock: Attribute.RichText;
    MiniBlocks: Attribute.Component<'block.mini-blocks', true>;
  };
}

export interface StatStats extends Schema.Component {
  collectionName: 'components_stat_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    IconImg: Attribute.Media;
    Number: Attribute.Text;
    Text: Attribute.Text;
  };
}

export interface StepSteps extends Schema.Component {
  collectionName: 'components_step_steps';
  info: {
    displayName: 'Steps';
    icon: 'arrowRight';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media;
  };
}

export interface StoryOurStory extends Schema.Component {
  collectionName: 'components_story_our_stories';
  info: {
    displayName: 'OurStory';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    ButtonTitle: Attribute.String;
    Description: Attribute.Blocks;
  };
}

export interface TeamImgImage extends Schema.Component {
  collectionName: 'components_team_img_images';
  info: {
    displayName: 'image';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
  };
}

export interface TeamCard extends Schema.Component {
  collectionName: 'components_team_cards';
  info: {
    displayName: 'card';
    icon: 'arrows-alt';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Franco Gino'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface TestimonialsItemItems extends Schema.Component {
  collectionName: 'components_testimonials_item_items';
  info: {
    displayName: 'Items';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lora Joly'>;
    designation: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Founder at Envato'>;
    image: Attribute.Media & Attribute.Required;
    feedbackText: Attribute.RichText & Attribute.Required;
  };
}

export interface TextTextWithImage extends Schema.Component {
  collectionName: 'components_text_text_with_images';
  info: {
    displayName: 'TextWithImage';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    Image: Attribute.Media;
    Title2: Attribute.String;
    Description2: Attribute.Blocks;
    Image2: Attribute.Media;
    ButtonTitle: Attribute.String;
  };
}

export interface TitleCardsSectionTitle extends Schema.Component {
  collectionName: 'components_title_cards_section_titles';
  info: {
    displayName: 'CardsSectionTitle';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface WorkingProcessProcess extends Schema.Component {
  collectionName: 'components_working_process_processes';
  info: {
    displayName: 'process';
    icon: 'angle-double-up';
    description: '';
  };
  attributes: {
    number: Attribute.String & Attribute.Required & Attribute.DefaultTo<'1'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Analysis & Research'>;
    shortText: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.choose-wislogic': AboutChooseWislogic;
      'about.home-page-team': AboutHomePageTeam;
      'about.images': AboutImages;
      'about.list': AboutList;
      'about.pictures': AboutPictures;
      'about.team-images': AboutTeamImages;
      'about.team': AboutTeam;
      'about.world-class-designers': AboutWorldClassDesigners;
      'block.mini-blocks': BlockMiniBlocks;
      'cards.cards': CardsCards;
      'cards.s-cards': CardsSCards;
      'ceo.ceo': CeoCeo;
      'cms.cms-content': CmsCmsContent;
      'cms.cms-head-text': CmsCmsHeadText;
      'collage.collage': CollageCollage;
      'contact-info.card': ContactInfoCard;
      'contact.contact-us': ContactContactUs;
      'detail.detail-page-content': DetailDetailPageContent;
      'detail.service-detail-page-content': DetailServiceDetailPageContent;
      'email.email-marketing-process-head': EmailEmailMarketingProcessHead;
      'email.email-marketing-process': EmailEmailMarketingProcess;
      'fun-facts.card': FunFactsCard;
      'graphic.graphic-designing-cards': GraphicGraphicDesigningCards;
      'hero.hero-section': HeroHeroSection;
      'home.home-page-cards': HomeHomePageCards;
      'images.collage': ImagesCollage;
      'info.information': InfoInformation;
      'list.services': ListServices;
      'meta.meta-details': MetaMetaDetails;
      'overview-list.lists': OverviewListLists;
      'partner.partners': PartnerPartners;
      'partners.image': PartnersImage;
      'ppc.ppc-section': PpcPpcSection;
      'pricing-features.features': PricingFeaturesFeatures;
      'pricing.card': PricingCard;
      'ques.question-answers': QuesQuestionAnswers;
      'result.result': ResultResult;
      'section.section1': SectionSection1;
      'section.section2-top-content': SectionSection2TopContent;
      'section.section2': SectionSection2;
      'section.section3': SectionSection3;
      'section.section4': SectionSection4;
      'section.section5': SectionSection5;
      'seo.case-studies-seo': SeoCaseStudiesSeo;
      'seo.seo-case-studies-text': SeoSeoCaseStudiesText;
      'seo.seo-industries-cards': SeoSeoIndustriesCards;
      'seo.seo-industries-text': SeoSeoIndustriesText;
      'seo.seo-industries': SeoSeoIndustries;
      'serv.our-services': ServOurServices;
      'service.section2': ServiceSection2;
      'service.service': ServiceService;
      'social.social-media-content': SocialSocialMediaContent;
      'social.social': SocialSocial;
      'socials.socials-list': SocialsSocialsList;
      'sol.sloution': SolSloution;
      'stat.stats': StatStats;
      'step.steps': StepSteps;
      'story.our-story': StoryOurStory;
      'team-img.image': TeamImgImage;
      'team.card': TeamCard;
      'testimonials-item.items': TestimonialsItemItems;
      'text.text-with-image': TextTextWithImage;
      'title.cards-section-title': TitleCardsSectionTitle;
      'working-process.process': WorkingProcessProcess;
    }
  }
}
