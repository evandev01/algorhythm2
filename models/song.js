const { INTEGER } = require("sequelize/types")

module.exports = function(sequelize, DataTypes){
    const Song = sequelize.define('Song', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        songName: {type: DataTypes.STRING},
        albumName: {type: DataTypes.STRING},
        mp3: {type: DataTypes.STRING},
        albumArt: {type: DataTypes.STRING}
    });

    Song.associate = model => {
        Song.belongsToMany(model.Playlist, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Song;
};