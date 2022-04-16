export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GraphCms_Asset = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headerCandidate?: Maybe<Scalars['Boolean']>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  album?: Maybe<GraphCms_Album>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  url: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
};


export type GraphCms_AssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<GraphCmsImagePlaceholder>;
};

export type GraphCmsImagePlaceholder =
  | 'NONE'
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG';

export type GraphCms_Locale =
  | 'en';

export type GraphCms_Stage =
  | 'DRAFT'
  | 'PUBLISHED';

export type GraphCms_User = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  isActive: Scalars['Boolean'];
  picture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  kind: GraphCms_UserKind;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_Album =
  | 'Banff'
  | 'City'
  | 'Night';

export type GraphCms_ScheduledOperation = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  rawPayload: Scalars['JSON'];
  errorMessage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  release?: Maybe<GraphCms_ScheduledRelease>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  status: GraphCms_ScheduledOperationStatus;
  affectedDocuments: Array<GraphCms_ScheduledOperationAffectedDocument>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_ScheduledRelease = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  releaseAt?: Maybe<Scalars['JSON']>;
  isImplicit: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  operations: Array<GraphCms_ScheduledOperation>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  status: GraphCms_ScheduledReleaseStatus;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

export type GraphCms_ScheduledOperationAffectedDocument = GraphCms_Asset;

export type GraphCms_ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

export type GraphCms_UserKind =
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  allGraphCmsAsset: GraphCms_AssetConnection;
  graphCmsUser?: Maybe<GraphCms_User>;
  allGraphCmsUser: GraphCms_UserConnection;
  graphCmsScheduledOperation?: Maybe<GraphCms_ScheduledOperation>;
  allGraphCmsScheduledOperation: GraphCms_ScheduledOperationConnection;
  graphCmsScheduledRelease?: Maybe<GraphCms_ScheduledRelease>;
  allGraphCmsScheduledRelease: GraphCms_ScheduledReleaseConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsAssetArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  headerCandidate?: InputMaybe<BooleanQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  album?: InputMaybe<GraphCms_AlbumQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsAssetArgs = {
  filter?: InputMaybe<GraphCms_AssetFilterInput>;
  sort?: InputMaybe<GraphCms_AssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsUserArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsUserArgs = {
  filter?: InputMaybe<GraphCms_UserFilterInput>;
  sort?: InputMaybe<GraphCms_UserSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsScheduledOperationArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsScheduledOperationArgs = {
  filter?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledOperationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryGraphCmsScheduledReleaseArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllGraphCmsScheduledReleaseArgs = {
  filter?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledReleaseSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Locale>;
  ne?: InputMaybe<GraphCms_Locale>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
};

export type GraphCms_StageQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Stage>;
  ne?: InputMaybe<GraphCms_Stage>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
};

export type GraphCms_UserFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_UserKind>;
  ne?: InputMaybe<GraphCms_UserKind>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
};

export type GraphCms_AlbumQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Album>;
  ne?: InputMaybe<GraphCms_Album>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Album>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Album>>>;
};

export type GraphCms_ScheduledOperationFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
};

export type GraphCms_ScheduledOperationFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  ne?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
};

export type GraphCms_ScheduledOperationStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  ne?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
};

export type GraphCms_AssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
};


export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetEdge = {
  next?: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous?: Maybe<GraphCms_Asset>;
};

export type GraphCms_AssetFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'mimeType'
  | 'size'
  | 'width'
  | 'height'
  | 'fileName'
  | 'handle'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'description'
  | 'headerCandidate'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'album'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_AssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_AssetGroupConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};


export type GraphCms_AssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  headerCandidate?: InputMaybe<BooleanQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  album?: InputMaybe<GraphCms_AlbumQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_AssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_AssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_UserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
};


export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserEdge = {
  next?: Maybe<GraphCms_User>;
  node: GraphCms_User;
  previous?: Maybe<GraphCms_User>;
};

export type GraphCms_UserFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'isActive'
  | 'picture'
  | 'name'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'kind'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_UserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_UserGroupConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};


export type GraphCms_UserGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_UserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledOperationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
};


export type GraphCms_ScheduledOperationConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationEdge = {
  next?: Maybe<GraphCms_ScheduledOperation>;
  node: GraphCms_ScheduledOperation;
  previous?: Maybe<GraphCms_ScheduledOperation>;
};

export type GraphCms_ScheduledOperationFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'rawPayload'
  | 'errorMessage'
  | 'description'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'release___remoteTypeName'
  | 'release___remoteId'
  | 'release___stage'
  | 'release___releaseAt'
  | 'release___isImplicit'
  | 'release___isActive'
  | 'release___errorMessage'
  | 'release___description'
  | 'release___title'
  | 'release___publishedAt'
  | 'release___updatedAt'
  | 'release___createdAt'
  | 'release___operations'
  | 'release___operations___remoteTypeName'
  | 'release___operations___remoteId'
  | 'release___operations___stage'
  | 'release___operations___rawPayload'
  | 'release___operations___errorMessage'
  | 'release___operations___description'
  | 'release___operations___publishedAt'
  | 'release___operations___updatedAt'
  | 'release___operations___createdAt'
  | 'release___operations___release___remoteTypeName'
  | 'release___operations___release___remoteId'
  | 'release___operations___release___stage'
  | 'release___operations___release___releaseAt'
  | 'release___operations___release___isImplicit'
  | 'release___operations___release___isActive'
  | 'release___operations___release___errorMessage'
  | 'release___operations___release___description'
  | 'release___operations___release___title'
  | 'release___operations___release___publishedAt'
  | 'release___operations___release___updatedAt'
  | 'release___operations___release___createdAt'
  | 'release___operations___release___operations'
  | 'release___operations___release___status'
  | 'release___operations___release___id'
  | 'release___operations___release___children'
  | 'release___operations___publishedBy___remoteTypeName'
  | 'release___operations___publishedBy___remoteId'
  | 'release___operations___publishedBy___stage'
  | 'release___operations___publishedBy___isActive'
  | 'release___operations___publishedBy___picture'
  | 'release___operations___publishedBy___name'
  | 'release___operations___publishedBy___publishedAt'
  | 'release___operations___publishedBy___updatedAt'
  | 'release___operations___publishedBy___createdAt'
  | 'release___operations___publishedBy___kind'
  | 'release___operations___publishedBy___id'
  | 'release___operations___publishedBy___children'
  | 'release___operations___updatedBy___remoteTypeName'
  | 'release___operations___updatedBy___remoteId'
  | 'release___operations___updatedBy___stage'
  | 'release___operations___updatedBy___isActive'
  | 'release___operations___updatedBy___picture'
  | 'release___operations___updatedBy___name'
  | 'release___operations___updatedBy___publishedAt'
  | 'release___operations___updatedBy___updatedAt'
  | 'release___operations___updatedBy___createdAt'
  | 'release___operations___updatedBy___kind'
  | 'release___operations___updatedBy___id'
  | 'release___operations___updatedBy___children'
  | 'release___operations___createdBy___remoteTypeName'
  | 'release___operations___createdBy___remoteId'
  | 'release___operations___createdBy___stage'
  | 'release___operations___createdBy___isActive'
  | 'release___operations___createdBy___picture'
  | 'release___operations___createdBy___name'
  | 'release___operations___createdBy___publishedAt'
  | 'release___operations___createdBy___updatedAt'
  | 'release___operations___createdBy___createdAt'
  | 'release___operations___createdBy___kind'
  | 'release___operations___createdBy___id'
  | 'release___operations___createdBy___children'
  | 'release___operations___status'
  | 'release___operations___id'
  | 'release___operations___parent___id'
  | 'release___operations___parent___children'
  | 'release___operations___children'
  | 'release___operations___children___id'
  | 'release___operations___children___children'
  | 'release___operations___internal___content'
  | 'release___operations___internal___contentDigest'
  | 'release___operations___internal___description'
  | 'release___operations___internal___fieldOwners'
  | 'release___operations___internal___ignoreType'
  | 'release___operations___internal___mediaType'
  | 'release___operations___internal___owner'
  | 'release___operations___internal___type'
  | 'release___publishedBy___remoteTypeName'
  | 'release___publishedBy___remoteId'
  | 'release___publishedBy___stage'
  | 'release___publishedBy___isActive'
  | 'release___publishedBy___picture'
  | 'release___publishedBy___name'
  | 'release___publishedBy___publishedAt'
  | 'release___publishedBy___updatedAt'
  | 'release___publishedBy___createdAt'
  | 'release___publishedBy___kind'
  | 'release___publishedBy___id'
  | 'release___publishedBy___parent___id'
  | 'release___publishedBy___parent___children'
  | 'release___publishedBy___children'
  | 'release___publishedBy___children___id'
  | 'release___publishedBy___children___children'
  | 'release___publishedBy___internal___content'
  | 'release___publishedBy___internal___contentDigest'
  | 'release___publishedBy___internal___description'
  | 'release___publishedBy___internal___fieldOwners'
  | 'release___publishedBy___internal___ignoreType'
  | 'release___publishedBy___internal___mediaType'
  | 'release___publishedBy___internal___owner'
  | 'release___publishedBy___internal___type'
  | 'release___updatedBy___remoteTypeName'
  | 'release___updatedBy___remoteId'
  | 'release___updatedBy___stage'
  | 'release___updatedBy___isActive'
  | 'release___updatedBy___picture'
  | 'release___updatedBy___name'
  | 'release___updatedBy___publishedAt'
  | 'release___updatedBy___updatedAt'
  | 'release___updatedBy___createdAt'
  | 'release___updatedBy___kind'
  | 'release___updatedBy___id'
  | 'release___updatedBy___parent___id'
  | 'release___updatedBy___parent___children'
  | 'release___updatedBy___children'
  | 'release___updatedBy___children___id'
  | 'release___updatedBy___children___children'
  | 'release___updatedBy___internal___content'
  | 'release___updatedBy___internal___contentDigest'
  | 'release___updatedBy___internal___description'
  | 'release___updatedBy___internal___fieldOwners'
  | 'release___updatedBy___internal___ignoreType'
  | 'release___updatedBy___internal___mediaType'
  | 'release___updatedBy___internal___owner'
  | 'release___updatedBy___internal___type'
  | 'release___createdBy___remoteTypeName'
  | 'release___createdBy___remoteId'
  | 'release___createdBy___stage'
  | 'release___createdBy___isActive'
  | 'release___createdBy___picture'
  | 'release___createdBy___name'
  | 'release___createdBy___publishedAt'
  | 'release___createdBy___updatedAt'
  | 'release___createdBy___createdAt'
  | 'release___createdBy___kind'
  | 'release___createdBy___id'
  | 'release___createdBy___parent___id'
  | 'release___createdBy___parent___children'
  | 'release___createdBy___children'
  | 'release___createdBy___children___id'
  | 'release___createdBy___children___children'
  | 'release___createdBy___internal___content'
  | 'release___createdBy___internal___contentDigest'
  | 'release___createdBy___internal___description'
  | 'release___createdBy___internal___fieldOwners'
  | 'release___createdBy___internal___ignoreType'
  | 'release___createdBy___internal___mediaType'
  | 'release___createdBy___internal___owner'
  | 'release___createdBy___internal___type'
  | 'release___status'
  | 'release___id'
  | 'release___parent___id'
  | 'release___parent___parent___id'
  | 'release___parent___parent___children'
  | 'release___parent___children'
  | 'release___parent___children___id'
  | 'release___parent___children___children'
  | 'release___parent___internal___content'
  | 'release___parent___internal___contentDigest'
  | 'release___parent___internal___description'
  | 'release___parent___internal___fieldOwners'
  | 'release___parent___internal___ignoreType'
  | 'release___parent___internal___mediaType'
  | 'release___parent___internal___owner'
  | 'release___parent___internal___type'
  | 'release___children'
  | 'release___children___id'
  | 'release___children___parent___id'
  | 'release___children___parent___children'
  | 'release___children___children'
  | 'release___children___children___id'
  | 'release___children___children___children'
  | 'release___children___internal___content'
  | 'release___children___internal___contentDigest'
  | 'release___children___internal___description'
  | 'release___children___internal___fieldOwners'
  | 'release___children___internal___ignoreType'
  | 'release___children___internal___mediaType'
  | 'release___children___internal___owner'
  | 'release___children___internal___type'
  | 'release___internal___content'
  | 'release___internal___contentDigest'
  | 'release___internal___description'
  | 'release___internal___fieldOwners'
  | 'release___internal___ignoreType'
  | 'release___internal___mediaType'
  | 'release___internal___owner'
  | 'release___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_ScheduledOperationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_ScheduledOperationGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};


export type GraphCms_ScheduledOperationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledReleaseConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
};


export type GraphCms_ScheduledReleaseConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseEdge = {
  next?: Maybe<GraphCms_ScheduledRelease>;
  node: GraphCms_ScheduledRelease;
  previous?: Maybe<GraphCms_ScheduledRelease>;
};

export type GraphCms_ScheduledReleaseFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'releaseAt'
  | 'isImplicit'
  | 'isActive'
  | 'errorMessage'
  | 'description'
  | 'title'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'operations'
  | 'operations___remoteTypeName'
  | 'operations___remoteId'
  | 'operations___stage'
  | 'operations___rawPayload'
  | 'operations___errorMessage'
  | 'operations___description'
  | 'operations___publishedAt'
  | 'operations___updatedAt'
  | 'operations___createdAt'
  | 'operations___release___remoteTypeName'
  | 'operations___release___remoteId'
  | 'operations___release___stage'
  | 'operations___release___releaseAt'
  | 'operations___release___isImplicit'
  | 'operations___release___isActive'
  | 'operations___release___errorMessage'
  | 'operations___release___description'
  | 'operations___release___title'
  | 'operations___release___publishedAt'
  | 'operations___release___updatedAt'
  | 'operations___release___createdAt'
  | 'operations___release___operations'
  | 'operations___release___operations___remoteTypeName'
  | 'operations___release___operations___remoteId'
  | 'operations___release___operations___stage'
  | 'operations___release___operations___rawPayload'
  | 'operations___release___operations___errorMessage'
  | 'operations___release___operations___description'
  | 'operations___release___operations___publishedAt'
  | 'operations___release___operations___updatedAt'
  | 'operations___release___operations___createdAt'
  | 'operations___release___operations___status'
  | 'operations___release___operations___id'
  | 'operations___release___operations___children'
  | 'operations___release___publishedBy___remoteTypeName'
  | 'operations___release___publishedBy___remoteId'
  | 'operations___release___publishedBy___stage'
  | 'operations___release___publishedBy___isActive'
  | 'operations___release___publishedBy___picture'
  | 'operations___release___publishedBy___name'
  | 'operations___release___publishedBy___publishedAt'
  | 'operations___release___publishedBy___updatedAt'
  | 'operations___release___publishedBy___createdAt'
  | 'operations___release___publishedBy___kind'
  | 'operations___release___publishedBy___id'
  | 'operations___release___publishedBy___children'
  | 'operations___release___updatedBy___remoteTypeName'
  | 'operations___release___updatedBy___remoteId'
  | 'operations___release___updatedBy___stage'
  | 'operations___release___updatedBy___isActive'
  | 'operations___release___updatedBy___picture'
  | 'operations___release___updatedBy___name'
  | 'operations___release___updatedBy___publishedAt'
  | 'operations___release___updatedBy___updatedAt'
  | 'operations___release___updatedBy___createdAt'
  | 'operations___release___updatedBy___kind'
  | 'operations___release___updatedBy___id'
  | 'operations___release___updatedBy___children'
  | 'operations___release___createdBy___remoteTypeName'
  | 'operations___release___createdBy___remoteId'
  | 'operations___release___createdBy___stage'
  | 'operations___release___createdBy___isActive'
  | 'operations___release___createdBy___picture'
  | 'operations___release___createdBy___name'
  | 'operations___release___createdBy___publishedAt'
  | 'operations___release___createdBy___updatedAt'
  | 'operations___release___createdBy___createdAt'
  | 'operations___release___createdBy___kind'
  | 'operations___release___createdBy___id'
  | 'operations___release___createdBy___children'
  | 'operations___release___status'
  | 'operations___release___id'
  | 'operations___release___parent___id'
  | 'operations___release___parent___children'
  | 'operations___release___children'
  | 'operations___release___children___id'
  | 'operations___release___children___children'
  | 'operations___release___internal___content'
  | 'operations___release___internal___contentDigest'
  | 'operations___release___internal___description'
  | 'operations___release___internal___fieldOwners'
  | 'operations___release___internal___ignoreType'
  | 'operations___release___internal___mediaType'
  | 'operations___release___internal___owner'
  | 'operations___release___internal___type'
  | 'operations___publishedBy___remoteTypeName'
  | 'operations___publishedBy___remoteId'
  | 'operations___publishedBy___stage'
  | 'operations___publishedBy___isActive'
  | 'operations___publishedBy___picture'
  | 'operations___publishedBy___name'
  | 'operations___publishedBy___publishedAt'
  | 'operations___publishedBy___updatedAt'
  | 'operations___publishedBy___createdAt'
  | 'operations___publishedBy___kind'
  | 'operations___publishedBy___id'
  | 'operations___publishedBy___parent___id'
  | 'operations___publishedBy___parent___children'
  | 'operations___publishedBy___children'
  | 'operations___publishedBy___children___id'
  | 'operations___publishedBy___children___children'
  | 'operations___publishedBy___internal___content'
  | 'operations___publishedBy___internal___contentDigest'
  | 'operations___publishedBy___internal___description'
  | 'operations___publishedBy___internal___fieldOwners'
  | 'operations___publishedBy___internal___ignoreType'
  | 'operations___publishedBy___internal___mediaType'
  | 'operations___publishedBy___internal___owner'
  | 'operations___publishedBy___internal___type'
  | 'operations___updatedBy___remoteTypeName'
  | 'operations___updatedBy___remoteId'
  | 'operations___updatedBy___stage'
  | 'operations___updatedBy___isActive'
  | 'operations___updatedBy___picture'
  | 'operations___updatedBy___name'
  | 'operations___updatedBy___publishedAt'
  | 'operations___updatedBy___updatedAt'
  | 'operations___updatedBy___createdAt'
  | 'operations___updatedBy___kind'
  | 'operations___updatedBy___id'
  | 'operations___updatedBy___parent___id'
  | 'operations___updatedBy___parent___children'
  | 'operations___updatedBy___children'
  | 'operations___updatedBy___children___id'
  | 'operations___updatedBy___children___children'
  | 'operations___updatedBy___internal___content'
  | 'operations___updatedBy___internal___contentDigest'
  | 'operations___updatedBy___internal___description'
  | 'operations___updatedBy___internal___fieldOwners'
  | 'operations___updatedBy___internal___ignoreType'
  | 'operations___updatedBy___internal___mediaType'
  | 'operations___updatedBy___internal___owner'
  | 'operations___updatedBy___internal___type'
  | 'operations___createdBy___remoteTypeName'
  | 'operations___createdBy___remoteId'
  | 'operations___createdBy___stage'
  | 'operations___createdBy___isActive'
  | 'operations___createdBy___picture'
  | 'operations___createdBy___name'
  | 'operations___createdBy___publishedAt'
  | 'operations___createdBy___updatedAt'
  | 'operations___createdBy___createdAt'
  | 'operations___createdBy___kind'
  | 'operations___createdBy___id'
  | 'operations___createdBy___parent___id'
  | 'operations___createdBy___parent___children'
  | 'operations___createdBy___children'
  | 'operations___createdBy___children___id'
  | 'operations___createdBy___children___children'
  | 'operations___createdBy___internal___content'
  | 'operations___createdBy___internal___contentDigest'
  | 'operations___createdBy___internal___description'
  | 'operations___createdBy___internal___fieldOwners'
  | 'operations___createdBy___internal___ignoreType'
  | 'operations___createdBy___internal___mediaType'
  | 'operations___createdBy___internal___owner'
  | 'operations___createdBy___internal___type'
  | 'operations___status'
  | 'operations___id'
  | 'operations___parent___id'
  | 'operations___parent___parent___id'
  | 'operations___parent___parent___children'
  | 'operations___parent___children'
  | 'operations___parent___children___id'
  | 'operations___parent___children___children'
  | 'operations___parent___internal___content'
  | 'operations___parent___internal___contentDigest'
  | 'operations___parent___internal___description'
  | 'operations___parent___internal___fieldOwners'
  | 'operations___parent___internal___ignoreType'
  | 'operations___parent___internal___mediaType'
  | 'operations___parent___internal___owner'
  | 'operations___parent___internal___type'
  | 'operations___children'
  | 'operations___children___id'
  | 'operations___children___parent___id'
  | 'operations___children___parent___children'
  | 'operations___children___children'
  | 'operations___children___children___id'
  | 'operations___children___children___children'
  | 'operations___children___internal___content'
  | 'operations___children___internal___contentDigest'
  | 'operations___children___internal___description'
  | 'operations___children___internal___fieldOwners'
  | 'operations___children___internal___ignoreType'
  | 'operations___children___internal___mediaType'
  | 'operations___children___internal___owner'
  | 'operations___children___internal___type'
  | 'operations___internal___content'
  | 'operations___internal___contentDigest'
  | 'operations___internal___description'
  | 'operations___internal___fieldOwners'
  | 'operations___internal___ignoreType'
  | 'operations___internal___mediaType'
  | 'operations___internal___owner'
  | 'operations___internal___type'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type GraphCms_ScheduledReleaseGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type GraphCms_ScheduledReleaseGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};


export type GraphCms_ScheduledReleaseGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'html'
  | 'htmlAst'
  | 'excerpt'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type BaseLayoutQueryVariables = Exact<{ [key: string]: never; }>;


export type BaseLayoutQuery = { allGraphCmsAsset: { nodes: Array<{ gatsbyImageData?: any | null, title?: string | null }> }, allSitePage: { nodes: Array<{ path: string, pageContext?: any | null }> } };

export type GalleryFieldsFragment = { handle: string, gatsbyImageData?: any | null, title?: string | null, description?: string | null, album?: GraphCms_Album | null };

export type IndexQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexQuery = { allGraphCmsAsset: { nodes: Array<{ handle: string, gatsbyImageData?: any | null, title?: string | null, description?: string | null, album?: GraphCms_Album | null }> } };

export type AlbumTemplateQueryVariables = Exact<{
  album: GraphCms_Album;
}>;


export type AlbumTemplateQuery = { allGraphCmsAsset: { nodes: Array<{ handle: string, gatsbyImageData?: any | null, title?: string | null, description?: string | null, album?: GraphCms_Album | null }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
