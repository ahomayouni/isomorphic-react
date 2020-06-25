import { mapStateToProps } from "../QuestionDetail";
// Map state to props sample
describe(`The Question Detail Component`, () => {
  describe(`The Container Element`, () => {
    describe("mapStateToPros", () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Something",
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = {
          question_id: 42,
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });
});
