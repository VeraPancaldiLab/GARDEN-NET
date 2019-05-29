import { CHANGED_CELL_TYPE, CHANGED_CHROMOSOME, CHANGED_FEATURE, CHANGED_FEATURES_LIST, CHANGED_FEATURES_METADATA, CHANGED_FEATURES_NEW, CHANGED_ORGANISM, CHANGED_SEARCH, CHANGED_TEXT } from "../actions/index";
import * as Reducer from "./index";

describe("reducers", () => {
  describe("chromosomes_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.chromosomes_reducer(undefined, {})).toBe(Reducer.DEFAULT_CHROMOSOME);
    });

    it("should handle CHANGED_CHROMOSOME action", () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: CHANGED_CHROMOSOME, chromosome: "X" })).toBe("X");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.chromosomes_reducer(Reducer.DEFAULT_CHROMOSOME, { type: "unknown" })).toBe(Reducer.DEFAULT_CHROMOSOME);
    });
  });

  describe("features_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.features_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURE);
    });

    it("should handle CHANGED_FEATURE action", () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: CHANGED_FEATURE, feature: "BRG1" })).toBe("BRG1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.features_reducer(Reducer.DEFAULT_FEATURE, { type: "unknown" })).toBe(Reducer.DEFAULT_FEATURE);
    });
  });

  describe("features_list_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.features_list_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURES_LIST);
    });

    it("should handle CHANGED_FEATURE action", () => {
      expect(Reducer.features_list_reducer(Reducer.DEFAULT_FEATURES_LIST, { type: CHANGED_FEATURES_LIST, features_list: ["BRG1"] })).toEqual(["BRG1"]);
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.features_list_reducer(Reducer.DEFAULT_FEATURES_LIST, { type: "unknown" })).toBe(Reducer.DEFAULT_FEATURES_LIST);
    });
  });

  describe("features_metadata_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.features_metadata_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURES_METADATA);
    });

    it("should handle CHANGED_FEATURES_METADATA action", () => {
      expect(Reducer.features_metadata_reducer(Reducer.DEFAULT_FEATURES_METADATA, { type: CHANGED_FEATURES_METADATA, features_metadata: {BRG1: "0"} })).toEqual({BRG1: "0"});
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.features_metadata_reducer(Reducer.DEFAULT_FEATURES_METADATA, { type: "unknown" })).toBe(Reducer.DEFAULT_FEATURES_METADATA);
    });
  });

  describe("features_new_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.features_new_reducer(undefined, {})).toBe(Reducer.DEFAULT_FEATURES_NEW);
    });

    it("should handle CHANGED_FEATURES_NEW action", () => {
      expect(Reducer.features_new_reducer(Reducer.DEFAULT_FEATURES_NEW, { type: CHANGED_FEATURES_NEW, features_new: {BRG1: 0} })).toEqual({BRG1: 0});
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.features_new_reducer(Reducer.DEFAULT_FEATURES_NEW, { type: "unknown" })).toBe(Reducer.DEFAULT_FEATURES_NEW);
    });
  });

  describe("search_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.search_reducer(undefined, {})).toBe(Reducer.DEFAULT_SEARCH);
    });

    it("should handle CHANGED_SEARCH action", () => {
      expect(Reducer.search_reducer(Reducer.DEFAULT_SEARCH, { type: CHANGED_SEARCH, search: "Hoxa1" })).toBe("Hoxa1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.search_reducer(Reducer.DEFAULT_SEARCH, { type: "unknown" })).toBe(Reducer.DEFAULT_SEARCH);
    });
  });

  describe("text_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.text_reducer(undefined, {})).toBe(Reducer.DEFAULT_TEXT);
    });

    it("should handle CHANGED_TEXT action", () => {
      expect(Reducer.text_reducer(Reducer.DEFAULT_TEXT, { type: CHANGED_TEXT, text: "Hoxa1" })).toBe("Hoxa1");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.text_reducer(Reducer.DEFAULT_TEXT, { type: "unknown" })).toBe(Reducer.DEFAULT_TEXT);
    });
  });

  describe("organism_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.organism_reducer(undefined, {})).toBe(Reducer.DEFAULT_ORGANISM);
    });

    it("should handle CHANGED_ORGANISM action", () => {
      expect(Reducer.organism_reducer(Reducer.DEFAULT_ORGANISM, { type: CHANGED_ORGANISM, organism: "Homo" })).toBe("Homo");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.organism_reducer(Reducer.DEFAULT_ORGANISM, { type: "unknown" })).toBe(Reducer.DEFAULT_ORGANISM);
    });
  });

  describe("cell_type_reducer", () => {
    it("should provide the initial state", () => {
      expect(Reducer.cell_type_reducer(undefined, {})).toBe(Reducer.DEFAULT_CELL_TYPE);
    });

    it("should handle CHANGED_CELL_TYPE action", () => {
      expect(Reducer.cell_type_reducer(Reducer.DEFAULT_CELL_TYPE, { type: CHANGED_CELL_TYPE, cell_type: "Mon" })).toBe("Mon");
    });

    it("should ignore unknown actions", () => {
      expect(Reducer.cell_type_reducer(Reducer.DEFAULT_CELL_TYPE, { type: "unknown" })).toBe(Reducer.DEFAULT_CELL_TYPE);
    });
  });
});
