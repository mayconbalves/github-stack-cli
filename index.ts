#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import axios from "axios";

const program = new Command();

program
  .name("github-stack-cli")
  .description("CLI for analyzing users and repositories on GitHub")
  .argument("<username>", "The GitHub username")
  .action(async (username: string) => {
    console.log(chalk.blue(`Searching Github user: ${username}`));

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`,
      );

      const stacks: Record<string, number> = {};

      repos.forEach((repo: any): void => {
        if (!repo.language) return;

        stacks[repo.language] = (stacks[repo.language] || 0) + 1;
      });

      const total = Object.values(stacks).reduce(
        (a: number, b: number): number => a + b,
        0,
      );

      console.log("\nUser:", chalk.green(username));
      console.log("Public repositories:", chalk.green(repos.length));

      console.log("\nLanguages:");

      for (const lang in stacks) {
        const percent = ((stacks[lang] / total) * 100).toFixed(1);
        console.log(`${lang} (${percent}%)`, chalk.green(stacks[lang]));
      }
    } catch (error: any) {
      console.log(chalk.red("Error to search user", error.message));
    }
  });

program.parse();

