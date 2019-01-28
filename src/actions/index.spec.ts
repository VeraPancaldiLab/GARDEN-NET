import * as Action from "./index";

describe("actions", () => {
  describe("chromosomes_action", () => {
    it("should provide the change_chromosome action", () => {
      expect(Action.change_chromosome("5")).toEqual({ type: Action.CHANGED_CHROMOSOME, chromosome: "5" });
    });
  });

  describe("features_action", () => {
    it("should provide the change_selection action", () => {
      expect(Action.change_feature("EZH2")).toEqual({ type: Action.CHANGED_FEATURE, feature: "EZH2" });
    });
  });

  describe("download_action", () => {
    it("should provide the change_download action", () => {
      expect(Action.change_download("http://localhost:8080/data/chromosomes/chr1.json")).toEqual({ type: Action.CHANGED_DOWNLOAD, download: "http://localhost:8080/data/chromosomes/chr1.json" });
    });
  });

  describe("search_action", () => {
    it("should provide the change_search action", () => {
      expect(Action.change_search("Hoxa1")).toEqual({ type: Action.CHANGED_SEARCH, search: "Hoxa1" });
    });
  });

  describe("text_action", () => {
    it("should provide the change_text action", () => {
      expect(Action.change_text("Hoxa1")).toEqual({ type: Action.CHANGED_TEXT, text: "Hoxa1" });
    });
  });
});
