import { Schema, model, models } from "mongoose";

export const TripDaysModel = new Schema(
  {
    route: String,
    year: Number,
    month: Number,
    days: [Number],
  }
);

export const TripDays = models.TripDays || model("TripDays", TripDaysModel );
