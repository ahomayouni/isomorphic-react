import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

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

  describe("the display element", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="title"
          body="body"
          answer_count={0}
          tags={["hitchhiking"]}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
