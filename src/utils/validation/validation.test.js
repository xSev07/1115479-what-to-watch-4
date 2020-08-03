import {checkCommentLength, isValidEmail, isValidPassword} from "./validation";

describe(`Check the comment length is correct`, () => {
  it(`should return true`, () => {
    expect(checkCommentLength(`A cookie associated with a cross-site resource at http://yastatic.net/ was set without the \`SameSite\` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with \`SameSite=None\` and \`Secure\``))
      .toBe(true);
  });

  it(`should return false`, () => {
    expect(checkCommentLength(`test`)).toBe(false);
  });
});

describe(`Check the email is correct`, () => {
  it(`should return true with basic email`, () => {
    expect(isValidEmail(`test@gmail.com`)).toBe(true);
  });

  it(`should return false with short email`, () => {
    expect(isValidEmail(`t@g.c`)).toBe(false);
  });

  it(`should return false without @`, () => {
    expect(isValidEmail(`testgmail.com`)).toBe(false);
  });

  it(`should return false without .`, () => {
    expect(isValidEmail(`test@gmailcom`)).toBe(false);
  });
});

describe(`Check the password is correct`, () => {
  it(`should return true`, () => {
    expect(isValidPassword(`qwerty`))
      .toBe(true);
  });

  it(`should return false`, () => {
    expect(isValidPassword(`11`)).toBe(false);
  });
});
