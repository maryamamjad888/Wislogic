import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutOurCompanyAboutOurCompany extends Schema.SingleType {
  collectionName: 'about_our_companies';
  info: {
    singularName: 'about-our-company';
    pluralName: 'about-our-companies';
    displayName: 'About-our-company';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-our-company.about-our-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-our-company.about-our-company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: 'About Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    HeroSection: Attribute.Component<'hero.hero-section'>;
    OurStory: Attribute.Component<'story.our-story'>;
    CEO: Attribute.Component<'ceo.ceo'>;
    ChooseWislogic: Attribute.Component<'about.choose-wislogic'>;
    WorldClassDesigners: Attribute.Component<'about.world-class-designers'>;
    OurTeam: Attribute.Component<'about.team'>;
    HomePageTeam: Attribute.Component<'about.home-page-team'>;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBestWorkShowcaseBestWorkShowcase extends Schema.SingleType {
  collectionName: 'best_work_showcases';
  info: {
    singularName: 'best-work-showcase';
    pluralName: 'best-work-showcases';
    displayName: 'Best-Work-Showcase';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Cards: Attribute.Component<'cards.cards', true>;
    Title: Attribute.String;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::best-work-showcase.best-work-showcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::best-work-showcase.best-work-showcase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlogBlog extends Schema.CollectionType {
  collectionName: 'blogs';
  info: {
    singularName: 'blog';
    pluralName: 'blogs';
    displayName: 'Blog';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::blog.blog', 'title'> & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    detailsText: Attribute.RichText & Attribute.Required;
    category: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::blog.blog', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages';
  info: {
    singularName: 'blog-page';
    pluralName: 'blog-pages';
    displayName: 'Blog Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ButtonTitle: Attribute.String;
    BannerImg: Attribute.Media;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::blog-page.blog-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCareerCareer extends Schema.SingleType {
  collectionName: 'careers';
  info: {
    singularName: 'career';
    pluralName: 'careers';
    displayName: 'Career';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    LeftText: Attribute.Blocks;
    RightText: Attribute.Blocks;
    Title: Attribute.String;
    Description: Attribute.Text;
    BannerImg: Attribute.Media;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::career.career',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactInfoContactInfo extends Schema.SingleType {
  collectionName: 'contact_infos';
  info: {
    singularName: 'contact-info';
    pluralName: 'contact-infos';
    displayName: 'Contact Info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    phoneNumber1: Attribute.String & Attribute.DefaultTo<'(+321) 895-980 008'>;
    email1: Attribute.String & Attribute.DefaultTo<'hello@aveb.com'>;
    address1: Attribute.String &
      Attribute.DefaultTo<'2750 Quadra Street Victoria, Canada.'>;
    Title: Attribute.String;
    Description: Attribute.Text;
    BannerImg: Attribute.Media;
    ButtonTitle: Attribute.String;
    ContactText: Attribute.Text;
    phoneNumber2: Attribute.String;
    address2: Attribute.Text;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-info.contact-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-info.contact-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.SingleType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Description: Attribute.Text;
    BannerImg: Attribute.Media;
    Title: Attribute.String;
    QuestionAnswers: Attribute.Component<'ques.question-answers', true>;
    FaqImage: Attribute.Media;
    Description2: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    OurServices: Attribute.Component<'serv.our-services', true>;
    Information: Attribute.Component<'info.information', true>;
    ContactUs: Attribute.Component<'contact.contact-us', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGoogleMapGoogleMap extends Schema.SingleType {
  collectionName: 'google_maps';
  info: {
    singularName: 'google-map';
    pluralName: 'google-maps';
    displayName: 'Google Map';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    mapUrl: Attribute.Text &
      Attribute.DefaultTo<'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629806.5608507423!2d-74.14550980308866!3d40.99473892694984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c295001ca56f9f%3A0x313170de6c0e7b75!2sFairview%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1630302531294!5m2!1sen!2sbd'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::google-map.google-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::google-map.google-map',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageMetaDetailHomePageMetaDetail
  extends Schema.SingleType {
  collectionName: 'home_page_meta_details';
  info: {
    singularName: 'home-page-meta-detail';
    pluralName: 'home-page-meta-details';
    displayName: 'HomePageMetaDetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page-meta-detail.home-page-meta-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page-meta-detail.home-page-meta-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHowWeWorkHowWeWork extends Schema.SingleType {
  collectionName: 'how_we_works';
  info: {
    singularName: 'how-we-work';
    pluralName: 'how-we-works';
    displayName: 'How-We-Work';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Steps: Attribute.Component<'step.steps', true>;
    Title: Attribute.String;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::how-we-work.how-we-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::how-we-work.how-we-work',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiItStartupBannerItStartupBanner extends Schema.SingleType {
  collectionName: 'it_startup_banners';
  info: {
    singularName: 'it-startup-banner';
    pluralName: 'it-startup-banners';
    displayName: 'IT Startup - Banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Secure IT solutions for a more secure environment'>;
    shortDescription: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et leo odio.'>;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get Started Now'>;
    image: Attribute.Media & Attribute.Required;
    shapeImg: Attribute.Media;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::it-startup-banner.it-startup-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::it-startup-banner.it-startup-banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLetSGetStartedLetSGetStarted extends Schema.SingleType {
  collectionName: 'let_s_get_starteds';
  info: {
    singularName: 'let-s-get-started';
    pluralName: 'let-s-get-starteds';
    displayName: "Let's Get Started";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"We're delivering the best customer experience">;
    btnText: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"Let's Get Started">;
    btnLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/contact'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::let-s-get-started.let-s-get-started',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::let-s-get-started.let-s-get-started',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLogoLogo extends Schema.SingleType {
  collectionName: 'logos';
  info: {
    singularName: 'logo';
    pluralName: 'logos';
    displayName: 'Logo';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blackLogo: Attribute.Media & Attribute.Required;
    whiteLogo: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::logo.logo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::logo.logo', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiOurWorkingProcessOurWorkingProcess
  extends Schema.SingleType {
  collectionName: 'our_working_processes';
  info: {
    singularName: 'our-working-process';
    pluralName: 'our-working-processes';
    displayName: 'Our Working Process';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Working Process'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Dedicated to help anything people\u2019s needs'>;
    image: Attribute.Media & Attribute.Required;
    processList: Attribute.Component<'working-process.process', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::our-working-process.our-working-process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::our-working-process.our-working-process',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPeopleWhoTrustUsPeopleWhoTrustUs extends Schema.SingleType {
  collectionName: 'people_who_trust_uses';
  info: {
    singularName: 'people-who-trust-us';
    pluralName: 'people-who-trust-uses';
    displayName: 'People-who-trust-us';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Partners: Attribute.Component<'partner.partners', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::people-who-trust-us.people-who-trust-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::people-who-trust-us.people-who-trust-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPortfolioPortfolio extends Schema.CollectionType {
  collectionName: 'portfolios';
  info: {
    singularName: 'portfolio';
    pluralName: 'portfolios';
    displayName: 'Portfolio';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::portfolio.portfolio', 'title'> &
      Attribute.Required;
    ProjectOverview: Attribute.RichText;
    ImagesCollage: Attribute.Component<'collage.collage', true>;
    Challenge: Attribute.RichText;
    solution: Attribute.Component<'sol.sloution'>;
    Result: Attribute.Component<'result.result'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::portfolio.portfolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::portfolio.portfolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Schema.SingleType {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    privacyPolicyContent: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-policy.privacy-policy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.SingleType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerImg: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
    ButtonTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.UID<'api::service.service', 'title'> & Attribute.Required;
    MegaMenuImage: Attribute.Media & Attribute.Required;
    HomePageCards: Attribute.Component<'home.home-page-cards'>;
    ServiceDetailPageContent: Attribute.Component<'detail.service-detail-page-content'>;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialIconSocialIcon extends Schema.SingleType {
  collectionName: 'social_icons';
  info: {
    singularName: 'social-icon';
    pluralName: 'social-icons';
    displayName: 'Social-Icon';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Social: Attribute.Component<'social.social', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-icon.social-icon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-icon.social-icon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStatisticStatistic extends Schema.SingleType {
  collectionName: 'statistics';
  info: {
    singularName: 'statistic';
    pluralName: 'statistics';
    displayName: 'Statistic';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.Text;
    Stats: Attribute.Component<'stat.stats', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::statistic.statistic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::statistic.statistic',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubscribeOurNewsletterSubscribeOurNewsletter
  extends Schema.SingleType {
  collectionName: 'subscribe_our_newsletters';
  info: {
    singularName: 'subscribe-our-newsletter';
    pluralName: 'subscribe-our-newsletters';
    displayName: 'Subscribe Our Newsletter';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    subTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Subscribe Our Newsletter'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'The latest resources, sent to your inbox weekly'>;
    image: Attribute.Media & Attribute.Required;
    IconImg: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subscribe-our-newsletter.subscribe-our-newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::subscribe-our-newsletter.subscribe-our-newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTestimonialsStyle1TestimonialsStyle1
  extends Schema.SingleType {
  collectionName: 'testimonials_style_1s';
  info: {
    singularName: 'testimonials-style-1';
    pluralName: 'testimonials-style-1s';
    displayName: 'Testimonials';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Here\u2019s what our amazing clients are saying'>;
    feedbacks: Attribute.Component<'testimonials-item.items', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::testimonials-style-1.testimonials-style-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::testimonials-style-1.testimonials-style-1',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWhatWeDoWhatWeDo extends Schema.SingleType {
  collectionName: 'what_we_dos';
  info: {
    singularName: 'what-we-do';
    pluralName: 'what-we-dos';
    displayName: 'What we do';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BannerImage: Attribute.Media;
    Description: Attribute.Text;
    MetaTitle: Attribute.Text;
    MetaDescription: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::what-we-do.what-we-do',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::what-we-do.what-we-do',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-our-company.about-our-company': ApiAboutOurCompanyAboutOurCompany;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::best-work-showcase.best-work-showcase': ApiBestWorkShowcaseBestWorkShowcase;
      'api::blog.blog': ApiBlogBlog;
      'api::blog-page.blog-page': ApiBlogPageBlogPage;
      'api::career.career': ApiCareerCareer;
      'api::contact-info.contact-info': ApiContactInfoContactInfo;
      'api::faq.faq': ApiFaqFaq;
      'api::footer.footer': ApiFooterFooter;
      'api::google-map.google-map': ApiGoogleMapGoogleMap;
      'api::home-page-meta-detail.home-page-meta-detail': ApiHomePageMetaDetailHomePageMetaDetail;
      'api::how-we-work.how-we-work': ApiHowWeWorkHowWeWork;
      'api::it-startup-banner.it-startup-banner': ApiItStartupBannerItStartupBanner;
      'api::let-s-get-started.let-s-get-started': ApiLetSGetStartedLetSGetStarted;
      'api::logo.logo': ApiLogoLogo;
      'api::our-working-process.our-working-process': ApiOurWorkingProcessOurWorkingProcess;
      'api::people-who-trust-us.people-who-trust-us': ApiPeopleWhoTrustUsPeopleWhoTrustUs;
      'api::portfolio.portfolio': ApiPortfolioPortfolio;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::project.project': ApiProjectProject;
      'api::service.service': ApiServiceService;
      'api::social-icon.social-icon': ApiSocialIconSocialIcon;
      'api::statistic.statistic': ApiStatisticStatistic;
      'api::subscribe-our-newsletter.subscribe-our-newsletter': ApiSubscribeOurNewsletterSubscribeOurNewsletter;
      'api::testimonials-style-1.testimonials-style-1': ApiTestimonialsStyle1TestimonialsStyle1;
      'api::what-we-do.what-we-do': ApiWhatWeDoWhatWeDo;
    }
  }
}
