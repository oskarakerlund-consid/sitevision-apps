import Node from '../../builtins/Node';

declare namespace resourceLocatorUtil {
  function getAddonRepository(): Node;
  function getAliasRepository(): Node;
  function getColorRepository(): Node;
  function getDecorationRepository(): Node;
  function getDefaultImageRepository(): Node;
  function getDirectoryRepository(): Node;
  function getExternalTopicRepository(): Node;
  function getFileRepository(): Node;
  function getFontRepository(): Node;
  function getIconRepository(): Node;
  function getImageRepository(): Node;
  function getIndexRepository(): Node;
  function getListStyleRepository(): Node;
  function getLocalFileRepository(): Node;
  function getLocalFileRepository(aNode: Node): Node;
  function getLocalImageRepository(): Node;
  function getLocalImageRepository(aNode: Node): Node;
  function getMetadataDefinitionTemplateRepository(): Node;
  function getModuleElementDraftRepository(): Node;
  function getModuleElementFileRepository(): Node;
  function getModuleElementFileRepository(aNode: Node): Node;
  function getModuleElementImageRepository(): Node;
  function getModuleElementImageRepository(aNode: Node): Node;
  function getModuleElementRepository(): Node;
  function getNamedReferenceRepository(): Node;
  function getNodeByIdentifier(anIdentifier: string): Node;
  function getNodeByPath(anAbsolutePath: string): Node;
  function getNodeByUrl(aUrl: string): Node;
  function getOAuth2ConfigurationRepository(): Node;
  function getPageCommentRepository(): Node;
  function getPageCommentRepository(aNode: Node): Node;
  function getPersonalFileRepository(aNode: Node): Node;
  function getPersonalImageRepository(aNode: Node): Node;
  function getPrincipalRepository(): Node;
  function getResponsiveBreakpointRepository(): Node;
  function getRoleRepository(): Node;
  function getRssFeedRepository(): Node;
  function getSite(): Node;
  function getSitePage(): Node;
  function getTagGroupRepository(): Node;
  function getTemplateRepository(): Node;
  function getTopicRepository(): Node;
  function getTrashcan(): Node;
  function getVirtualGroupRepository(): Node;
}

export default resourceLocatorUtil;