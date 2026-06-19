package com.stylehub.model;

import java.util.List;

public class StyleResponse {

    private List<Product> outfits;
    private List<Pose> poses;
    private List<Accessories> accessories;
    private List<Makeup> makeup;

    // getters & setters
    public List<Product> getOutfits() { return outfits; }
    public void setOutfits(List<Product> outfits) { this.outfits = outfits; }

    public List<Pose> getPoses() { return poses; }
    public void setPoses(List<Pose> poses) { this.poses = poses; }

    public List<Accessories> getAccessories() { return accessories; }
    public void setAccessories(List<Accessories> accessories) { this.accessories = accessories; }

    public List<Makeup> getMakeup() { return makeup; }
    public void setMakeup(List<Makeup> makeup) { this.makeup = makeup; }
}