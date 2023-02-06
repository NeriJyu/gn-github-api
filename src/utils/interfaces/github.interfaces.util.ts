export interface IFindUsersGitHub {
  id: number;
  login: string;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  gravatar_id: string;
  name?: string;
  email?: string;
  starred_at?: string;
}

export interface IFindUserGitHub {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  twitter_username?: string;
  private_gists?: number;
  total_private_repos?: number;
  owned_private_repos?: number;
  disk_usage?: number;
  collaborators?: number;
  two_factor_authentication?: boolean;
  plan?: IFindUserPlanGitHub;
  suspended_at?: string;
  business_plus?: boolean;
  ldap_dn?: string;
}

interface IFindUserPlanGitHub {
  collaborators: number;
  name: string;
  space: number;
  private_repos: number;
}

export interface IFindUserReposGitHub {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IFindUserReposOwnerGitHub;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  hooks_url: string;
  ssh_url?: string;
  git_url?: string;
  clone_url?: string;
  mirror_url?: string;
  svn_url?: string;
  homepage?: string;
  language?: string;
  forks_count?: number;
  stargazers_count?: number;
  watchers_count?: number;
  size?: number;
  default_branch?: string;
  open_issues_count?: number;
  is_template?: boolean;
  topics?: string[];
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  has_pages?: boolean;
  has_downloads?: boolean;
  has_discussions?: boolean;
  archived?: boolean;
  disabled?: boolean;
  visibility?: string;
  pushed_at?: string;
  created_at?: string;
  updated_at?: string;
  permissions?: IFindUserReposPermissionsGitHub;
  role_name?: string;
  temp_clone_token?: string;
  delete_branch_on_merge?: boolean;
  subscribers_count?: number;
  network_count?: number;
  code_of_conduct?: IFindUserReposCodeOfConductGitHub;
  license?: IFindUserReposLicenseGitHub;
  forks?: number;
  open_issues?: number;
  watchers?: number;
  allow_forking?: boolean;
  web_commit_signoff_required?: boolean;
  security_and_analysis?: IFindUserReposSecurityAndAnalysisGitHub;
}

interface IFindUserReposOwnerGitHub {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  email?: string;
  starred_at?: string;
}

interface IFindUserReposPermissionsGitHub {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
}

interface IFindUserReposCodeOfConductGitHub {
  key: string;
  name: string;
  url: string;
  html_url: string;
  body?: string;
}

interface IFindUserReposLicenseGitHub {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

interface IFindUserReposSecurityAndAnalysisGitHub {
  advanced_security: {
    status: "enabled" | "disabled";
  };
  secret_scanning: {
    status: "enabled" | "disabled";
  };
  secret_scanning_push_protection: {
    status: "enabled" | "disabled";
  };
}
