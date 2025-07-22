const CLASSNAME = 'bc_block_small*';

const BLOCKS = [
  {
    'color': [245, 234, 187],
    'id': 1,
  },
  {
    'color': [254, 215, 54],
    'id': 2,
  },
  {
    'color': [254, 152, 0],
    'id': 3,
  },
  {
    'color': [254, 152, 187],
    'id': 4,
  },
  {
    'color': [224, 65, 23],
    'id': 5,
  },
  {
    'color': [102, 40, 18],
    'id': 6,
  },
  {
    'color': [0, 113, 34],
    'id': 7,
  },
  {
    'color': [145, 208, 60],
    'id': 8,
  },
  {
    'color': [171, 89, 176],
    'id': 9,
  },
  {
    'color': [130, 89, 176],
    'id': 10,
  },
  {
    'color': [93, 169, 246],
    'id': 11,
  },
  {
    'color': [170, 207, 209],
    'id': 12,
  },
  {
    'color': [81, 81, 81],
    'id': 13,
  },
  {
    'color': [255, 255, 255],
    'id': 14,
  },
  {
    'color': [152, 254, 203],
    'id': 15,
  },
  {
    'color': [101, 101, 0],
    'id': 16,
  },
  {
    'color': [110, 60, 11],
    'id': 17,
  },
  {
    'color': [118, 127, 131],
    'id': 18,
  },
  {
    'color': [187, 191, 195],
    'id': 19,
  },
  {
    'color': [160, 231, 251],
    'id': 20,
  },
  {
    'color': [43, 190, 254],
    'id': 21,
  },
  {
    'color': [0, 115, 254],
    'id': 22,
  },
  {
    'color': [0, 0, 254],
    'id': 23,
  },
  {
    'color': [0, 0, 199],
    'id': 24,
  },
  {
    'color': [0, 132, 254],
    'id': 25,
  },
  {
    'color': [101, 132, 254],
    'id': 26,
  },
  {
    'color': [187, 182, 254],
    'id': 27,
  },
  {
    'color': [220, 181, 252],
    'id': 28,
  },
  {
    'color': [155, 114, 254],
    'id': 29,
  },
  {
    'color': [103, 61, 254],
    'id': 30,
  },
  {
    'color': [62, 26, 198],
    'id': 31,
  },
  {
    'color': [149, 0, 141],
    'id': 32,
  },
  {
    'color': [221, 0, 214],
    'id': 33,
  },
  {
    'color': [252, 113, 254],
    'id': 34,
  },
  {
    'color': [252, 181, 252],
    'id': 35,
  },
  {
    'color': [243, 190, 224],
    'id': 36,
  },
  {
    'color': [254, 83, 155],
    'id': 37,
  },
  {
    'color': [230, 0, 94],
    'id': 38,
  },
  {
    'color': [173, 0, 35],
    'id': 39,
  },
  {
    'color': [254, 53, 0],
    'id': 40,
  },
  {
    'color': [254, 119, 81],
    'id': 41,
  },
  {
    'color': [243, 208, 178],
    'id': 42,
  },
  {
    'color': [251, 224, 176],
    'id': 43,
  },
  {
    'color': [252, 160, 60],
    'id': 44,
  },
  {
    'color': [230, 95, 0],
    'id': 45,
  },
  {
    'color': [140, 21, 0],
    'id': 46,
  },
  {
    'color': [80, 48, 0],
    'id': 47,
  },
  {
    'color': [172, 128, 0],
    'id': 48,
  },
  {
    'color': [251, 216, 125],
    'id': 49,
  },
  {
    'color': [153, 188, 0],
    'id': 50,
  },
  {
    'color': [218, 247, 110],
    'id': 51,
  },
  {
    'color': [185, 248, 0],
    'id': 52,
  },
  {
    'color': [0, 185, 0],
    'id': 53,
  },
  {
    'color': [0, 120, 0],
    'id': 54,
  },
  {
    'color': [45, 98, 45],
    'id': 55,
  },
  {
    'color': [0, 169, 0],
    'id': 56,
  },
  {
    'color': [81, 217, 79],
    'id': 57,
  },
  {
    'color': [181, 248, 111],
    'id': 58,
  },
  {
    'color': [137, 173, 0],
    'id': 59,
  },
  {
    'color': [12, 55, 11],
    'id': 60,
  },
  {
    'color': [0, 88, 0],
    'id': 61,
  },
  {
    'color': [0, 168, 66],
    'id': 62,
  },
  {
    'color': [77, 248, 152],
    'id': 63,
  },
  {
    'color': [173, 239, 215],
    'id': 64,
  },
  {
    'color': [0, 246, 251],
    'id': 65,
  },
  {
    'color': [0, 232, 228],
    'id': 66,
  },
  {
    'color': [0, 135, 148],
    'id': 67,
  },
  {
    'color': [0, 63, 88],
    'id': 68,
  },
  {
    'color': [50, 101, 101],
    'id': 69,
  },
]

const ROTATIONS = [[0, 1], [2, 3]];

const PRESET = document.getElementById('preset');
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext("2d");
const CANVAS_NEW = document.getElementById('canvas_new_colours');
const CTX_NEW = CANVAS_NEW.getContext("2d");

let name = "preset";

function findNearestBlock(c) {
  let minDist = (255 ** 2) * 3
  let minBlock = {
    'color': [255, 255, 255],
    'id': 14,
  };

  for (let b of BLOCKS) {
    let dist =  (b['color'][0] - c[0]) ** 2 + (b['color'][1] - c[1]) ** 2 + (b['color'][2] - c[2]) ** 2;
    if (dist < minDist) {
      minDist = dist;
      minBlock = b;
    }
  }

  return minBlock;
}

const POSITIONERS = {
  'floor_0': {
    'pos_x': (x, y) => Math.floor(x / 2),
    'pos_y': (x, y, w) => Math.floor(y / 2),
    'pos_z': (x, y, h) => 0,
    'rot': (x, y) => ROTATIONS[x % 2][y % 2],
    'state': '4',
  },
  'floor_1': {
    'pos_x': (x, y) => Math.floor(y / 2),
    'pos_y': (x, y, w) => Math.floor((w - x - 1) / 2),
    'pos_z': (x, y, h) => 0,
    'rot': (x, y) => ROTATIONS[y % 2][1 - x % 2],
    'state': '4',
  },
  'wall_0': {
    'pos_x': (x, y) => Math.floor(x / 2),
    'pos_y': (x, y, w) => 0,
    'pos_z': (x, y, h) => (h - y - 1) * 0.5 + (x % 2) * 0.01,
    'rot': (x, y) => ROTATIONS[x % 2][0],
    'state': '2',
  },
  'wall_1': {
    'pos_x': (x, y) => 0,
    'pos_y': (x, y, w) => Math.floor((w - x - 1) / 2),
    'pos_z': (x, y, h) => (h - y - 1) * 0.5 + (1 - x % 2) * 0.01,
    'rot': (x, y) => ROTATIONS[0][1 - x % 2],
    'state': '2',
  },
};


function updatePreset() {
  let files = document.getElementById('file').files;
  let positioner = POSITIONERS[document.getElementById('format').value]
  if (files.length === 0)
    return;

  if (FileReader && files && files.length) {
    let fr = new FileReader();
    fr.onload = function () {
      let image = new Image();
      image.src = fr.result;
      image.onload = function() {
        let placing = [];
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
        CTX_NEW.clearRect(0, 0, CANVAS_NEW.width, CANVAS_NEW.height)
        CANVAS.width = image.width;
        CANVAS.height = image.height;
        CANVAS_NEW.width = image.width;
        CANVAS_NEW.height = image.height;
        CTX.drawImage(image, 0, 0);

        let imgData = CTX.getImageData(0, 0, image.width, image.height);

        for (let x = 0; x < imgData.width; x++) {
          for (let y = 0; y < imgData.height; y++) {
            let index = (x + y * imgData.width) * 4;
            let c = imgData.data.slice(index, index + 4);
            if (c[3] === 255) {
              let block = findNearestBlock(c);
              let pos_x = positioner.pos_x(x, y);
              let pos_y = positioner.pos_y(x, y, image.width);
              let pos_z = positioner.pos_z(x, y, image.height);
              let rot = positioner.rot(x, y);
              let state = positioner.state;

              CTX_NEW.fillStyle = `#${block.color[0].toString(16).padStart(2, '0')}${block.color[1].toString(16).padStart(2, '0')}${block.color[2].toString(16).padStart(2, '0')}`;
              CTX_NEW.fillRect(x, y, 1, 1);

              placing.push({
                'rotation': rot,
                'name': `${CLASSNAME}${block['id']}[${placing.length}]`,
                'className': `${CLASSNAME}${block['id']}`,
                'location': {
                  'x': pos_x,
                  'y': pos_y,
                  'z': pos_z,
                },
                'id': placing.length,
                'state': state,
              });
            }
          }
        }
        console.log(placing);

        PRESET.innerHTML = JSON.stringify({
          "wired": {
            "effects": [],
            "variables": [],
            "addons": [],
            "conditions": [],
            "triggers": [],
            "selectors": [],
            "variables_map": {}
          },
          "bindings": [],
          "furni": placing,
        }, null, 4);
      };
    }
    fr.readAsDataURL(files[0]);
    name = files[0].name.replace(".png", "").replace(".gif", "");
  }
}

function download() {
  if (PRESET.innerHTML === "") {
    return;
  }

  const link = document.createElement("a");
  const file = new Blob([PRESET.innerHTML], { type: 'text/plain' });
  link.href = URL.createObjectURL(file);
  link.download = `${name}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}
