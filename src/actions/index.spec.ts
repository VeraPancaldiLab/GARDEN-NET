import * as Action from "./index";

describe("actions", () => {
  describe("chromosomes_action", () => {
    it("should provide the change_chromosome action", () => {
      expect(Action.change_chromosome("5")).toEqual({
        chromosome: "5",
        type: Action.CHANGED_CHROMOSOME
      });
    });
  });

  describe("features_action", () => {
    it("should provide the change_selection action", () => {
      expect(Action.change_feature("EZH2")).toEqual({
        feature: "EZH2",
        type: Action.CHANGED_FEATURE
      });
    });
  });

  describe("features_list_action", () => {
    it("should provide the change_features_list action", () => {
      expect(Action.change_features_list(["EZH2"])).toEqual({
        features_list: ["EZH2"],
        type: Action.CHANGED_FEATURES_LIST
      });
    });
  });

  describe("features_list_action", () => {
    it("should provide the change_features_list action", () => {
      expect(Action.change_features_metadata({ EZH2: "0" })).toEqual({
        features_metadata: { EZH2: "0" },
        type: Action.CHANGED_FEATURES_METADATA
      });
    });
  });

  describe("features_new_action", () => {
    it("should provide the change_features_new action", () => {
      expect(Action.change_features_new({ EZH2: 0 })).toEqual({
        features_new: { EZH2: 0 },
        type: Action.CHANGED_FEATURES_NEW
      });
    });
  });

  describe("search_action", () => {
    it("should provide the change_search action", () => {
      expect(Action.change_search("Hoxa1")).toEqual({
        search: "Hoxa1",
        type: Action.CHANGED_SEARCH
      });
    });
  });

  describe("text_action", () => {
    it("should provide the change_text action", () => {
      expect(Action.change_text("Hoxa1")).toEqual({
        text: "Hoxa1",
        type: Action.CHANGED_TEXT
      });
    });
  });

  describe("organism_action", () => {
    it("should provide the change_organism action", () => {
      expect(Action.change_organism("Homo")).toEqual({
        organism: "Homo",
        type: Action.CHANGED_ORGANISM
      });
    });
  });

  describe("cell_type_action", () => {
    it("should provide the change_cell_type action", () => {
      expect(Action.change_cell_type("Mon")).toEqual({
        cell_type: "Mon",
        type: Action.CHANGED_CELL_TYPE
      });
    });
  });
});
