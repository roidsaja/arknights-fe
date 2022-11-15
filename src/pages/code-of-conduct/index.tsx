import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const CodeConduct: NextPage = () => {
  return (
    <CodeConductWrapper>
      <h1>Code of Conduct</h1>
      <h2>Our Pledge</h2>
      We as members, contributors, and leaders pledge to make participation in
      our community a harassment-free experience for everyone, regardless of
      age, body size, visible or invisible disability, ethnicity, sex
      characteristics, gender identity and expression, level of experience,
      education, socio-economic status, nationality, personal appearance, race,
      caste, color, religion, or sexual identity and orientation. We pledge to
      act and interact in ways that contribute to an open, welcoming, diverse,
      inclusive, and healthy community.
      <h2>Our Standards</h2>
      Examples of behavior that contributes to a positive environment for our
      community include: Demonstrating empathy and kindness toward other people
      Being respectful of differing opinions, viewpoints, and experiences Giving
      and gracefully accepting constructive feedback Accepting responsibility
      and apologizing to those affected by our mistakes, and learning from the
      experience Focusing on what is best not just for us as individuals, but
      for the overall community Examples of unacceptable behavior include: The
      use of sexualized language or imagery, and sexual attention or advances of
      any kind Trolling, insulting or derogatory comments, and personal or
      political attacks Public or private harassment Publishing others' private
      information, such as a physical or email address, without their explicit
      permission Other conduct which could reasonably be considered
      inappropriate in a professional setting
      <h2>Enforcement Responsibilities</h2>
      Community leaders are responsible for clarifying and enforcing our
      standards of acceptable behavior and will take appropriate and fair
      corrective action in response to any behavior that they deem
      inappropriate, threatening, offensive, or harmful. Community leaders have
      the right and responsibility to remove, edit, or reject comments, commits,
      code, wiki edits, issues, and other contributions that are not aligned to
      this Code of Conduct, and will communicate reasons for moderation
      decisions when appropriate.
      <h2>Scope</h2>
      This Code of Conduct applies within all community spaces, and also applies
      when an individual is officially representing the community in public
      spaces. Examples of representing our community include using an official
      e-mail address, posting via an official social media account, or acting as
      an appointed representative at an online or offline event.
      <h2>Enforcement</h2>
      Instances of abusive, harassing, or otherwise unacceptable behavior may be
      reported to the community leaders responsible for enforcement at
      conduct@creativecommons.org. All complaints will be reviewed and
      investigated promptly and fairly. All community leaders are obligated to
      respect the privacy and security of the reporter of any incident. Further
      details of specific enforcement policies: Codes of Conduct Enforcement.
      <h2>Last Revised</h2>
      2022-05-11 For a detailed list of changes, see History for
      content/community/code-of-conduct/contents.lr -
      creativecommons/creativecommons.github.io-source.
      <h2>Attribution</h2>
      <p>
        This Code of Conduct is adapted from the Contributor Covenant, version
        2.1, available at{" "}
        <Link href="https://www.contributor-covenant.org/version/2/1/code_of_conduct.html">
          https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
        </Link>
      </p>
      <p>
        Community Impact Guidelines were inspired by Mozilla's code of conduct
        enforcement ladder. For answers to common questions about this code of
        conduct, see the FAQ at{" "}
        <Link href="https://www.contributor-covenant.org/faq">
          https://www.contributor-covenant.org/faq
        </Link>
      </p>
      <p>
        Translations are available at{" "}
        <Link href="https://www.contributor-covenant.org/translations">
          https://www.contributor-covenant.org/translations
        </Link>
      </p>
    </CodeConductWrapper>
  );
};

const CodeConductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin: 2rem;

  h1 {
    border-bottom: 2px solid transparent;
    border-color: #67b7a0;
  }
`;

export default CodeConduct;
