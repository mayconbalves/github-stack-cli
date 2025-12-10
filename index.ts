#!/usr/bin/env bun

import { Command } from "commander";
import chalk from "chalk";
import axios from "axios";

interface GitHubRepo {
  language: string | null;
  name: string;
}

interface LanguageStats {
  [language: string]: number;
}

const program = new Command();

async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const { data } = await axios.get<GitHubRepo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`User "${username}" not found`);
      }
      throw new Error(
        `GitHub API error: ${error.response?.statusText || error.message}`
      );
    }
    throw error;
  }
}

function calculateLanguageStats(repos: GitHubRepo[]): LanguageStats {
  const stacks: LanguageStats = {};

  repos.forEach((repo) => {
    if (!repo.language) return;
    stacks[repo.language] = (stacks[repo.language] || 0) + 1;
  });

  return stacks;
}

function displayResults(
  username: string,
  repos: GitHubRepo[],
  stacks: LanguageStats
): void {
  const total = Object.values(stacks).reduce((a, b) => a + b, 0);

  console.log("\nUser:", chalk.green(username));
  console.log("Public repositories:", chalk.green(repos.length));

  if (total === 0) {
    console.log(chalk.yellow("\nNo repositories with detected languages"));
    return;
  }

  console.log("\nLanguages:");

  const sortedLanguages = Object.entries(stacks).sort((a, b) => b[1] - a[1]);

  for (const [lang, count] of sortedLanguages) {
    const percent = ((count / total) * 100).toFixed(1);
    console.log(`${lang.padEnd(20)} ${chalk.green(count.toString().padStart(3))} (${percent}%)`);
  }
}

program
  .name("github-stack-cli")
  .description("CLI for analyzing users and repositories on GitHub")
  .version("1.1.0")
  .argument("<username>", "The GitHub username")
  .action(async (username: string) => {
    console.log(chalk.blue(`Searching GitHub user: ${username}`));

    try {
      const repos = await fetchUserRepos(username);
      const stacks = calculateLanguageStats(repos);
      displayResults(username, repos, stacks);
    } catch (error) {
      if (error instanceof Error) {
        console.log(chalk.red(`Error: ${error.message}`));
        process.exit(1);
      }
    }
  });

program.parse();

