import Image from "../models/image.model.js";

/* ---------------- CREATE IMAGE ---------------- */

export const createImage = async (req, res) => {
  try {
    let imageUrl = "";
    let imageType = "";

    /* OPTION 1 : DIRECT FILE UPLOAD */

    if (req.file) {
      imageUrl = `/uploads/images/${req.file.filename}`;
      imageType = "upload";
    } else if (req.body.imageUrl) {
      /* OPTION 2 : IMAGE LINK */
      imageUrl = req.body.imageUrl;
      imageType = "link";
    } else {
      return res.status(400).json({
        message: "Please provide image file or imageUrl",
      });
    }

    const image = await Image.create({
      title: req.body.title,
      imageUrl,
      imageType,
    });

    res.status(201).json({
      message: "Image created successfully",
      data: image,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------- GET ALL IMAGES ---------------- */

export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------- DELETE IMAGE ---------------- */

export const deleteImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id);

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    res.status(200).json({
      message: "Image deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ---------------- GET SINGLE IMAGE ---------------- */

export const getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    res.status(200).json({
      message: "Image fetched successfully",
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ---------------- UPDATE IMAGE ---------------- */

export const updateImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    /* OPTION 1 : NEW FILE UPLOAD */

    if (req.file) {
      image.imageUrl = `/uploads/images/${req.file.filename}`;
      image.imageType = "upload";
    }

    /* OPTION 2 : IMAGE LINK */

    if (req.body.imageUrl) {
      image.imageUrl = req.body.imageUrl;
      image.imageType = "link";
    }

    /* UPDATE TITLE */

    if (req.body.title) {
      image.title = req.body.title;
    }

    await image.save();

    res.status(200).json({
      message: "Image updated successfully",
      data: image,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
